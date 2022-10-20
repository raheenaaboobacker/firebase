import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/AdminHeader';
import AdminSidebar from '../../Components/AdminSidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

 function AdminDashboard() {
  const navigate=useNavigate()
  const [user,setUser]=useState([])
  const [fisherman,setFisherman]=useState([])
  let count=0
  
  
  // useEffect(() => {
  //  axios.get("http://localhost:5000/admin/view-users")
  //  .then(response=>{
  //   if(response.data.success==true){
  //     setUser(response.data.data)
  //     console.log(user);
  //   }
  // })
  // axios.get("http://localhost:5000/admin/view-fisherman")
  //  .then(response=>{
  //   if(response.data.success==true){
  //     setFisherman(response.data.data)
  //     console.log(fisherman);
  //   }
  // })
  // }, [])
  
  return (
              <div className="app sidebar-mini">
    <AdminHeader/>
    <div className="adminapp-sidebar__overlay" data-toggle="sidebar"></div>
    <AdminSidebar/>
   <main className="app-content">
  <div className="app-title">
    <div>
      <h1><i className="fa fa-dashboard" /> Dashboard</h1>
      {/* <p>A free and open source Bootstrap 4 admin template</p> */}
    </div>
    <ul className="app-breadcrumb breadcrumb">
      <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
      <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
    </ul>
  </div>  

  <div className="row">
    
    <div className="col-md-6 col-lg-6" onClick={()=>{navigate("/viewTeacher")}}>
      <div className="widget-small primary coloured-icon"><i className="icon fa fa-users fa-3x" />
        <div className="info">
          <h4>Teachers</h4>
        {/* <p><b>{user.length}</b></p> */}
        </div>
      </div>
    </div>
    
    <div className="col-md-6 col-lg-6"  onClick={()=>{navigate("/viewStudent")}}>
      <div className="widget-small warning coloured-icon"><i className="icon fa fa-users fa-3x" />
        <div className="info">
          <h4>Students</h4>
          {/* <p><b>{fisherman.length}</b></p> */}
        </div>
      </div>
    </div>
   
  </div>
  <div className="row">
   
  </div>
</main>

    </div>
    
      
  )
}


export default AdminDashboard;
