import { collection, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { db } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js'

export default function Messageshow() {
    const [data, setData] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'message'));
        onSnapshot(q, (querySnapshot) => {
            setData(querySnapshot.docs.map(doc => ({
             
                data: doc.data()
            })))
        })
        console.log(data);

    }, [])
    return (
        <div>
            <div id="cta" className="section">
                {/* Backgound Image */}
                <div className="bg-image bg-parallax overlay" style={{ backgroundImage: 'url(./assets/img/post01.jpg)' }} />
                {/* /Backgound Image */}
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">

                        <div className="col-md-6">
                            <h2 className="white-text">Important MEssages Here.</h2>
                            <p className="lead white-text"> Messages</p>
                            {/* <a className="main-button icon-button" href="#">Get Started!</a> */}
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /Call To Action */}
            {/* Why us */}
            <div id="why-us" className="section">
                {/* container */}
                <div className="container">
                    {/* row */}

                    {/* /row */}
                    <hr className="section-hr" />
                    {/* row */}
                    <div className="row">
                        <div className="col-md-6">
                            {data.map(item=>(
                            <h3>
                            {CryptoJS.AES.decrypt(item.data.messagedata, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)}.</h3>

                            ))}
                            {/* <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
                            <p>No vel facete sententiae, quodsi dolores no quo, pri ex tamquam interesset necessitatibus. Te denique cotidieque delicatissimi sed. Eu doming epicurei duo. Sit ea perfecto deseruisse theophrastus. At sed malis hendrerit, elitr deseruisse in sit, sit ei facilisi mediocrem.</p> */}
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <a className="about-video" href="#">
                                <img src="assets/img/about-video.jpg" alt />
                                {/* <i className="play-icon fa fa-play" /> */}
                            </a>
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
        </div>
    )
}
