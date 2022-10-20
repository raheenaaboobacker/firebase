import React from 'react'
import { useParams } from 'react-router-dom';
import TeacherNav from '../../Components/TeacherNav'
import CryptoJS from 'crypto-js'
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import storage from "../../firebase"
import { collection, doc, getDoc,updateDoc, onSnapshot, query, where } from "firebase/firestore";
import {db} from '../../firebase'
import { useState } from 'react';
import { useEffect } from 'react';
import '../student/studentprofile.css'
import Footer from '../../Components/Footer';

export default function SingleStudent() {
  const [file, setFile] = useState("");

  const [student,setStudent]=useState([])
  const [marks,setMarks]=useState(null)
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  const [dept,setDept]=useState("")
  const [rno,setRno]=useState("")
  const [place,setPlace]=useState("")
  const [gender,setGendr]=useState("")
  const [role,setRole]=useState("")
  const [phone,setPhone]=useState("")
  const {id } = useParams();
  console.log(id);

  useEffect(() => {
   
     const unsub = onSnapshot(doc(db, "user", id), (doc) => {
       // console.log("Current data: ", doc.data());
       const data = doc.data()
       console.log(data);


   var datahh={
    name:CryptoJS.AES.decrypt(data.name, 'secret_key').toString(CryptoJS.enc.Utf8),
    address:CryptoJS.AES.decrypt(data.name, 'secret_key').toString(CryptoJS.enc.Utf8),
    dept:data.dept,
    role:data.dept
   }
       setName(CryptoJS.AES.decrypt(data.name, 'secret_key').toString(CryptoJS.enc.Utf8))
       setAddress(CryptoJS.AES.decrypt(data.address, 'secret_key').toString(CryptoJS.enc.Utf8))
       setRno(CryptoJS.AES.decrypt(data.rno, 'secret_key').toString(CryptoJS.enc.Utf8))
       setDept(data.dept)
       setRole(data.role)
       setPhone(CryptoJS.AES.decrypt(data.phone, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8))
       setPlace(CryptoJS.AES.decrypt(data.place, 'secret_key').toString(CryptoJS.enc.Utf8))
       setGendr(CryptoJS.AES.decrypt(data.gender, 'secret_key').toString(CryptoJS.enc.Utf8))
       setMarks(CryptoJS.AES.decrypt(data.marks, 'secret_key').toString(CryptoJS.enc.Utf8))

       console.log(name);
       setStudent([
        ...student,
        {...datahh}
      ]);
   });
   console.log("",student);

     }, [])
     

     const handleChange=(event)=>{
      setFile(event.target.files[0]);
  }
    const handleUpload=(e)=>{
  e.preventDefault();
  if (!file) {
    alert("Please choose a file first!")
  }
    const storageRef = ref(storage, file.name);
   
    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
   
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
  
            // update progress
            console.log(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                updateDoc(doc(db, "user", id ), {
                 
                  marks:CryptoJS.AES.encrypt(url, process.env.REACT_APP_SECRET_KEY).toString(),
                }).then(()=>{
                  alert("added")
                 
                }).catch(err=>{
                  console.log(err);
                })
            });
        }
    );
      }
  
  //   const getData=()=>{
  // const starsRef = ref(storage, file.name);
  
  // // Get the download URL
  // getDownloadURL(starsRef)
  //   .then((url) => {
  //     // Insert url into an <img> tag to "download"
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     // A full list of error codes is available at
  //     // https://firebase.google.com/docs/storage/web/handle-errors
  //     switch (error.code) {
  //       case 'storage/object-not-found':
  //         // File doesn't exist
  //         break;
  //       case 'storage/unauthorized':
  //         // User doesn't have permission to access the object
  //         break;
  //       case 'storage/canceled':
  //         // User canceled the upload
  //         break;
  
  //       // ...
  
  //       case 'storage/unknown':
  //         // Unknown error occurred, inspect the server response
  //         break;
  //     }
  //   });
  //   }

  return (
    <div>
      <TeacherNav/>
      
      <div className="container">
  <div className="main-body">
    <div className="row gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
           
              <div className="mt-3">
                <h4>{name}</h4>
                <p className="text-secondary mb-1">Dept: {dept}</p>
                <p className="text-muted font-size-sm">{role}</p>
                <p className="text-muted font-size-sm">{phone}</p>
                <button className="btn btn-primary">add</button>
                <button className="btn btn-outline-primary">Message</button>
              </div>
       
              
            </div>
          </div>
        </div>
        {/* <div className="card mt-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Website</h6>
              <span className="text-secondary">https://bootdey.com</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>Github</h6>
              <span className="text-secondary">bootdey</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>Twitter</h6>
              <span className="text-secondary">@bootdey</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>Instagram</h6>
              <span className="text-secondary">bootdey</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
              <span className="text-secondary">bootdey</span>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {name}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Roll Number</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {rno}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Gender</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {gender}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
               {address}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone Number</h6>
              </div>
              <div className="col-sm-9 text-secondary">
               {phone}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Place</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {place}
              </div>
            </div>
            <hr />
            {marks===null?
            <><div className="row">
            <form onSubmit={handleUpload}>
              <div className="col-sm-3">
                <h6 className="mb-0">Upload marks</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              <input type="file" onChange={handleChange}></input>
              <input type='submit' value="addd"/>
              </div>
              </form>
            </div>
            <hr /></>:<>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Marks</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <a href={marks}>{marks}</a>
              </div>
            </div>
            <hr /></>}
           
       
            {/* <div className="row">
              <div className="col-sm-12">
             
                <a className="btn btn-primary "  >Edit</a>
              </div>
            </div> */}
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}
