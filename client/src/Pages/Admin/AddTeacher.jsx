import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'
import { useNavigate } from 'react-router-dom'
import {db} from '../../firebase'
import { addDoc,collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../firebase";
import CryptoJS from 'crypto-js'

export default function AddTeacher() {
   
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
    createUserWithEmailAndPassword (auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    try {
        addDoc(collection(db, 'user'), {
           userId: user.uid,
          role:"teacher",
          name:CryptoJS.AES.encrypt(data.name, process.env.REACT_APP_SECRET_KEY).toString(),
          dept: data.dept,
          place:CryptoJS.AES.encrypt(data.place, process.env.REACT_APP_SECRET_KEY).toString(),
          phone:CryptoJS.AES.encrypt(data.phone, process.env.REACT_APP_SECRET_KEY).toString(),
          address:CryptoJS.AES.encrypt(data.address, process.env.REACT_APP_SECRET_KEY).toString(),
         }).then(()=>{
           alert("added")
           navigate("/admindashboard")
         })
        
       } catch (err) {
         alert(err)
       }
  })
  .catch((error) => {
    setError(true);
   alert(error);
  });
  }

  return (
    <div className="app sidebar-mini">
    <AdminHeader/>
    <div className="adminapp-sidebar__overlay" data-toggle="sidebar"></div>
    <AdminSidebar/>
    <main className="app-content">
    <div className="app-title">
      <div>
        <h1><i className="fa fa-edit"></i> Add Teacher</h1>
        {/* <p>Alert can sent to Fisher Man</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item">Add Student</li>
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
                  <label htmlFor="exampleInputEmail1">Enter Teacher Name</label>
                  <input className="form-control" id="exampleInputText" type="text"  placeholder="Enter Name" name="name" value={data.name} onChange={handleInputChange} required/>
                </div>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Enter Teacher Email</label>
                  <input className="form-control" id="exampleInputText" type="email"  placeholder="Enter email" name="email" value={data.email} onChange={handleInputChange} required/>
                </div>
                <div class="form-group">
                  <label className="control-label">Address</label>
                  <textarea className="form-control" rows="4" placeholder="Enter your address"name="address" value={data.address} onChange={handleInputChange} required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Enter Department</label>
                  <input className="form-control" id="exampleInputText" type="text"  placeholder="Enter Department" name="dept" value={data.dept} onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Enter Phone Number</label>
                  <input className="form-control" id="exampleInputText" type="number"  placeholder="Enter Phone Number" name="phone" value={data.phone} onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Enter place</label>
                  <input className="form-control" id="exampleInputText" type="text"  placeholder="Enter place" name="place" value={data.place} onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Enter Password</label>
                  <input className="form-control" id="exampleInputText" type="password"  placeholder="Password" name="password" value={data.password} onChange={handleInputChange} required/>
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
