import { addDoc, collection, doc, onSnapshot, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import TeacherNav from '../../Components/TeacherNav'
import { db } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js'
import Footer from '../../Components/Footer';

export default function TeacherViewStudents() {
  const navigate=useNavigate()
  const [data,setData]=useState([])
  const [dept,setDept]=useState(localStorage.getItem("dept"))

  useEffect(()=>{
    const q = query(collection(db, 'user'), where("dept", "==", dept),where("role", "==", "student"));
    onSnapshot(q, (querySnapshot) => {
      setData(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    console.log(data);
    
  },[])
  useEffect(() => {
    console.log(data);
   
    
  }, [data])

  
  return (
    <div>
        <TeacherNav/>
        <div id="cta" className="section">
                {/* Backgound Image */}
                <div className="bg-image bg-parallax overlay" style={{ backgroundImage: 'url(./assets/img/post01.jpg)' }} />
                {/* /Backgound Image */}
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">

                        <div className="col-md-6">
                            <h2 className="white-text">Student Details</h2>
                            {/* <p className="lead white-text"> Messages</p> */}
                            {/* <a className="main-button icon-button" href="#">Get Started!</a> */}
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>

       <div className="content" style={{background:"#eef2f5",padding:"1px",height: "580px"}}>
  <div className="container">
    <h2 className="mb-5"></h2>
    <div className="table-responsive">
      <table className="table table-striped custom-table">
        <thead>
          <tr>
            <th scope="col">
              <label className="control control--checkbox">
                <input type="checkbox" className="js-check-all" />
                <div className="control__indicator" />
              </label>
            </th>
            <th scope="col">Reg No</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Gender</th>
            <th scope="col">Contact Number</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {
            data.map(value=>(
              <tr scope="row">
            <td>
              <label className="control control--checkbox">
                <input type="checkbox" />
                <div className="control__indicator" />
              </label>
            </td>
            <td>
              
             {CryptoJS.AES.decrypt(value.data.rno, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}
            </td>
            <td className="pl-0">
              <div className="d-flex align-items-center">
                <label className="custom-control ios-switch">
                  <input type="checkbox" className="ios-switch-control-input" defaultChecked />
                  <span className="ios-switch-control-indicator" />
                </label>
                <Link to={`/singleStudent/${value?.id}`}><a href="" >   {CryptoJS.AES.decrypt(value.data.name, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}
                </a>
                </Link>
              </div>
            </td>
            <td>
            {CryptoJS.AES.decrypt(value.data.address, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}
              <small className="d-block">  {CryptoJS.AES.decrypt(value.data.place, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}</small>
            </td>
            <td>  {CryptoJS.AES.decrypt(value.data.gender, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}</td>
            <td>  {CryptoJS.AES.decrypt(value?.data?.phone, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}</td>
            <td><Link to={`/singleStudent/${value?.id}`}><a href="" className="more">add marks</a></Link></td>
          </tr>
            ))
          }
          
         
         
        </tbody>
      </table>
    </div>
  </div>
</div>
<Footer/>

    </div>
  )
}
