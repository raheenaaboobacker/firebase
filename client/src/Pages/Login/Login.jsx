import React,{useState} from 'react'
import Footer from '../../Components/Footer';
import Nav from '../../Components/Nav';
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../firebase";
import {useNavigate} from 'react-router-dom'
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';
import {db} from '../../firebase'
import CryptoJS from 'crypto-js';

export default function Login() {
    const navigate=useNavigate()
    
    const [error, setError] = useState(false);
    const [name,setName]=useState("")
    const [data,setData]=useState([])
    const [itemfilter,setItemfilter]=useState([])
    const [contacts,setContacts]=useState([])

    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setContacts({
            ...contacts,
            [name]:value
        })
        console.log(contacts);
    }

    
    const handleLogin = (e) => {
        e.preventDefault();
    
        signInWithEmailAndPassword(auth, contacts.email, contacts.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log(user.uid)
            if(user.uid=="HXSosxHDe4dLPE2IwcNifKvVitI3"){
              navigate("/admindashboard")
            }
            else{
              const q = query(collection(db, "user"), where("userId", "==", user.uid));
              const unsubscribe = onSnapshot(q, (querySnapshot) => {
                setData(querySnapshot.docs.map(doc => ({
                  id: doc.id,
                  data: doc.data()
                })))
                console.log(data[0].data.dept);
                localStorage.setItem("id",data[0].id)
                if(data[0].data.role==="student"){
                  navigate('/studentdashboard')
                }else{
                  localStorage.setItem("dept",data[0].data.dept)
                  navigate('/teacherdashboard')
                }
              });
              // onSnapshot(query(collection(db, 'user')), (querySnapshot) => {
                // setData(querySnapshot.docs.map(doc => ({
                //   id: doc.id,
                //   data: doc.data()
                // })))
                // console.log(data);
               
              //   setItemfilter(data&&data.filter((filterdata)=>{
              //     return filterdata.data.userId===user.uid
              //   }))
              //   console.log(itemfilter);
              //   if(itemfilter[0].data.role==="student"){
              //     console.log(itemfilter[0].id);
              //     localStorage.setItem("studentId",itemfilter[0].id)
                 
              //   console.log(data);
              //   localStorage.setItem("studentdata",data)
              //    navigate('/studentdashboard')
              //   }else{
                  
              //    navigate('/teacherdashboard')
              //   }
              // })
          }
            // dispatch({type:"LOGIN", payload:user})
            // navigate("/")
          })
          .catch((error) => {
            console.log(error);
            setError(true);
          });
      };

  return (
    <>
    <Nav/>
    <div id="home" className="hero-area">
   {/* Backgound Image */}
   <div className="bg-image bg-parallax overlay" style={{backgroundImage: 'url(./assets/img/home-background.jpg)'}} />
  
  <div className='logindiv'>
  <section className="ftco-section">
  <div className="container">
    {/* <div className="row justify-content-center">
      <div className="col-md-6 text-center mb-5">
        <h2 className="heading-section">Login #04</h2>
      </div>
    </div> */}
    <div className="row justify-content-center">
      <div className="col-md-12 col-lg-10">
        <div className="wrap d-md-flex">
          <div className="img" style={{backgroundImage: 'url(assets/img/course03.jpg)'}}>
          </div>
          <div className="login-wrap p-4 p-md-5">
            <div className="d-flex">
              <div className="w-100">
                <h3 className="mb-4">Sign In</h3>
              </div>
              <div className="w-100">
                <p className="social-media d-flex justify-content-end">
                  <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
                  <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                </p>
              </div>
            </div>
            <form onSubmit={handleLogin} className="signin-form">
              <div className="form-group mb-3">
                <label className="label" htmlFor="email">Email</label>
                <input type="email" className="form-control" placeholder="email" name='email' value={contacts.email}
                 onChange={handleInputChange} required />
              </div>
              <div className="form-group mb-3">
                <label className="label" htmlFor="password">Password</label>
                <input type="password" className="form-control" placeholder="Password"name='password' value={contacts.password}
                 onChange={handleInputChange}  required />
              </div>
              <div className="form-group">
                <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                {error && <span>Wrong email or password!</span>}
              </div>
              {/* <div className="form-group d-md-flex">
                <div className="w-50 text-left">
                  <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="w-50 text-md-right">
                  <a href="#">Forgot Password</a>
                </div>
              </div> */}
            </form>
            <p className="text-center">Not a member? <a  href="/register">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</div>
<Footer/>
</>
  )
}
