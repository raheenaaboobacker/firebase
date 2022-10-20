import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'
import { useNavigate } from 'react-router-dom'
import {db} from '../../firebase'
import { addDoc,collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../firebase";
import CryptoJS from 'crypto-js'

export default function AddMessage() {
      
  const [data,setData]=useState([])
  const [error, setError] = useState(false);


  const navigate=useNavigate()

  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setData({
        ...data,
        [name]:value
    })
    console.log(data);
}

const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
        addDoc(collection(db, 'message'), {
           messagedata:CryptoJS.AES.encrypt(data.message, process.env.REACT_APP_SECRET_KEY).toString(),
         }).then(()=>{
           alert("added")
           navigate("/admindashboard")
         })
        
       } catch (err) {
         alert(err)
       }
 
  }
  return (
    <div className="app sidebar-mini">
    <AdminHeader/>
    <div className="adminapp-sidebar__overlay" data-toggle="sidebar"></div>
    <AdminSidebar/>
    <main className="app-content">
    <div className="app-title">
      <div>
        <h1><i className="fa fa-edit"></i> Add Message</h1>
        {/* <p>Alert can sent to Fisher Man</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item">Add Message</li>
        {/* <li className="breadcrumb-item"><a href="#">Form Components</a></li> */}
      </ul>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="tile">
          <div className="row">
            <div className="col-lg-7 offset-lg-2">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Enter Message Here</label>
                  <textarea className="form-control" id="exampleInputText" type="text"  placeholder="Enter message" name="message" value={data.message} onChange={handleInputChange} required/>
                </div>
             
                
                
                <div className="form-submit">
                <input type="submit" style={{width:"200px"}} name="submit" id="submit" className="submit" value="Add" />
            </div>
              </form>
            </div>
            </div>
           
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}
