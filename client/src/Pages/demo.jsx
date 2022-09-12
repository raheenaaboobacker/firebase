// import {Firebase} from './firebase/config'
import {useState, useEffect} from 'react'
import {collection, query,addDoc,doc, updateDoc,deleteDoc, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../firebase'
import CryptoJS from 'crypto-js'
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../firebase";

export default function demo() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    var ciphertext = CryptoJS.AES.encrypt('raheena', 'secret key').toString();
  console.log(ciphertext);
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key');
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  
  console.log(bytes);
  console.log(originalText);
  
    const [title, setTitle] = useState({
      name:"",
      age:""
    })
  
    useEffect(() => {
      
    
      // console.log(tasks);
    },[])
    const handleInputChange=(e)=>{
      const {name,value}=e.target
      setTitle({
          ...title,
          [name]:value
      })
      console.log(title);
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
   
    try {
     addDoc(collection(db, 'tasks'), {
        name: ciphertext,
        age: ciphertext,
     
      }).then(()=>{
        alert("added")
      })
     
    } catch (err) {
      alert(err)
    }
  }
  
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'tasks', "lrVVPBPznSGgvs6dE9qW")
    try{
       updateDoc(taskDocRef, {
        name: "Avani",
        age: 10
      }).then(()=>
      alert("updated"))
     
    } catch (err) {
      alert(err)
    }    
  }

 
  const handledelete = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'tasks', "lrVVPBPznSGgvs6dE9qW")
    try{
      deleteDoc(taskDocRef).then(()=>
      alert("deleted"))
     
    } catch (err) {
      alert(err)
    }    
  }
  
  
  const handleLogin = (e) => {
    e.preventDefault();
  
  
  };
  return (
    <div className="App">
    {/* <button onClick={()=>{
     db.firestore().collection("user").get().then(snapshot=>{
      snapshot.forEach((obj=>{
        console.log(obj.data);
      }))
     })
    }}>
      click me
    </button> */}
    <form onSubmit={handleSubmit}>
    <input type="text" value={title.name} name="name" onChange={handleInputChange}></input>
    <input type="text" value={title.age} name="age"onChange={handleInputChange}></input>
 <button >
     Addx
    </button>
    </form>

    <h1>update</h1>
    <button onClick={handleUpdate}>update</button>
    
    <h1>Delete</h1>
    <button onClick={handledelete}>delete</button>
    <div className="login">
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <span>Wrong email or password!</span>}
    </form>
  </div>
  </div>
  )
}
