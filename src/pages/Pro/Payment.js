import React from "react";
import PaymentsPng from "../../Images/Payment.jpeg";
import { useState } from "react";
import { storage } from '../../firebase-config'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'


export default function Payment() {

  const [imageUpload, setImageUpload] = useState(null)

  const uploadImage = () => {
      if(imageUpload == null){
          alert("Please select an image")
      }
      const imageRef = ref(storage, `Payments/${imageUpload.name + v4() }`)
      uploadBytes(imageRef, imageUpload).then(()=>{
        alert("Image uploaded successfully")
      })
  }

  return (
    <div className="payment">
      <h1>Payment</h1>
      <img src={PaymentsPng} alt="Payment" width="250px" height="250px"/>
      <h1>150$</h1>
      <input className="file" type="file" onChange={(event)=>{setImageUpload(event.target.files[0])}}></input>
      <button className="upload" onClick={uploadImage}>Upload Screenshot</button>
      <a className="payment-btn" href="/pro/ProLanding">Access Pro</a>
    </div>
  );
}