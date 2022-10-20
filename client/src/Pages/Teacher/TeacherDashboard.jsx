import { addDoc, collection, doc, onSnapshot, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import TeacherNav from '../../Components/TeacherNav'
import { db } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js'
import Footer from '../../Components/Footer';
import Messageshow from '../../Components/Messageshow';


export default function TeacherDashboard() {
  const navigate=useNavigate()
  const [data,setData]=useState([])

  useEffect(()=>{
    const q = query(collection(db, 'user'), where("dept", "==", "computer science"),where("role", "==", "student"));
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
       

     <Messageshow/>
<Footer/>

    </div>
  )
}
