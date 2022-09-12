import React, { useEffect } from 'react'
import StudentNav from '../../Components/StudentNav'
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import {db} from '../../firebase'
import { useState } from 'react';
import CryptoJS from 'crypto-js'

export default function StudentDashboard() {


  
    
  return (
    <><StudentNav/>
    {/* {data&&data.map(data=>{
      <h1>data.role</h1>
    })} */}
    </>
  )
}
