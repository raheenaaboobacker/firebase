import React,{useState} from 'react'
import './Login/login.css'
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../firebase";
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import {useNavigate} from 'react-router-dom'
import {db} from '../firebase'
import { addDoc,collection } from 'firebase/firestore';


export default function Register() {
    const navigate=useNavigate()
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        try {
            addDoc(collection(db, 'user'), {
               userId: user.uid,
              role:"teacher"
            
             }).then(()=>{
               alert("added")
               // dispatch({type:"LOGIN", payload:user})
               navigate("/login")
             })
            
           } catch (err) {
             alert(err)
           }
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
    }


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
                <h3 className="mb-4">Sign Up</h3>
              </div>
              <div className="w-100">
                <p className="social-media d-flex justify-content-end">
                  <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
                  <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="signin-form">
              <div className="form-group mb-3">
                <label className="label" htmlFor="email">Email</label>
                <input type="email" className="form-control" placeholder="email" 
                 onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group mb-3">
                <label className="label" htmlFor="password">Password</label>
                <input type="password" className="form-control" placeholder="Password"
                 onChange={(e) => setPassword(e.target.value)}  required />
              </div>
              <div className="form-group">
                <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign Up</button>
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
            <p className="text-center">Already a member? <a  href="/login">Sign In</a></p>
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
