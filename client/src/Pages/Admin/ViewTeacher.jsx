import { addDoc, collection, doc, onSnapshot, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { db } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js'
import { useEffect } from 'react';
import AdminHeader from '../../Components/AdminHeader';
import AdminSidebar from '../../Components/AdminSidebar';


export default function ViewTeacher() {
    const navigate=useNavigate()
  const [data,setData]=useState([])

  useEffect(()=>{
    const q = query(collection(db, 'user'),where("role", "==", "teacher"));
    onSnapshot(q, (querySnapshot) => {
      setData(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    console.log(data);
    
  },[])
  return (
<div className="app sidebar-mini">
        <AdminHeader/>
        <AdminSidebar/>
        <main className="app-content">

         <div className="content" style={{background:"#eef2f5",padding:"1px"}}>
  <div className="container">
    <h2 className="mb-5">Teacher Details</h2>
    <div className="table-responsive">
      <table className="table table-striped custom-table">
        <thead>
          <tr>
           
            <th scope="col">Name</th>
            <th scope="col" >Department</th>
            <th scope="col">Address</th>
            <th scope="col">Place</th>
            <th scope="col">Contact Number</th>
          </tr>
        </thead>
        <tbody>
         
          {
            data.map(value=>(
              <tr scope="row">
           
                <td>   {CryptoJS.AES.decrypt(value.data.name, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}</td>

               <td>  {value?.data?.dept}</td>
              
            <td>
            {CryptoJS.AES.decrypt(value?.data?.address, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}
              <small className="d-block">  {CryptoJS.AES.decrypt(value.data.place, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}</small>
            </td>
            <td>  {CryptoJS.AES.decrypt(value?.data?.place, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}</td>
            <td>  {CryptoJS.AES.decrypt(value?.data?.phone, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}</td>
            {/* <td><Link to={`/singleStudent/${value?.id}`}><a href="" className="more">add marks</a></Link></td> */}
          </tr>
            ))
          }
          
         
         
        </tbody>
      </table>
    </div>
  </div>
</div>
</main>
    
    </div>  )
}
