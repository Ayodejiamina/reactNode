import React from 'react'
import './admin.css'
import axios from 'axios'
import { ApiURl } from '../Constant'
import { useEffect,useState } from 'react'

function AdminReg() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    avatar: "",
    phone: "",
    password: "",
  })
  const [error, setError] = useState({
    fnameErr: "",
    lnameErr: "",
    emailErr: "",
    genderErr: "",
    avatarErr: "",
    phoneErr: "",
    passwordErr: "",
  })
  const handleData = (e) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
       })
  }
  const submitData = async (e) => {
    e.preventDefault();
    const pushErr = {}
    if (data.fname.trim() == "" || data.fname.trim() == null) {
      pushErr.fnameErr = "name is require"
    }
    if (data.lname.trim() == "" || data.lname.trim() == null) {
      pushErr.lnameErr = "name is require"
    } 
    if (data.avatar.trim() == "" || data.avatar.trim() == null) {
      pushErr.avatarErr = "Please choose an image"
    } 
    if (data.email.trim() == "" || data.email.trim() == null) {
      pushErr.emailErr = "email is require"
    }
    else if (!(data.email.endsWith('@yahoo.com') || data.email.endsWith("@gmail.com"))) {
      pushErr.emailErr = "Invalid Email Address"
    }
     if (data.phone.trim() == "" || data.phone.trim() == null) {
      pushErr.phoneErr = "phone is require"
    } 
    else if (!(data.phone.startsWith('090') || data.phone.startsWith('080') || data.phone.startsWith('070') || data.phone.startsWith('091') || data.phone.startsWith('081')) || data.phone.length !== 11) {
      pushErr.phoneErr = "invalid Phone Number"
    }  
    if (data.gender.trim() == "" || data.gender.trim() == null) {
      pushErr.genderErr = "gender is require"
    } 
     if (data.password.trim() == "" || data.password.trim() == null) {
      pushErr.passwordErr = "password is require"
    }
    if (Object.keys(pushErr).length > 0) {
      setError(pushErr)
    }
    else {
      try {
        const res = await axios.post(`${ApiURl}/adminReg`, data)
      console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
  }


  return (
    <>
       <div className="cont">
    <div className="container-fluid form">
       <form action="/userReg" onSubmit={submitData} >
        <h2 className="text-center">Admin Registration</h2>
        <div className="mt-3"> 
        
              <input type="text" id="" placeholder="First name..." className="inps" name="fname" onChange={handleData} /> 
              <small style={{ color: "red" }}>{ error.fnameErr}</small>
          </div>
          <div className="mt-3"> 
       
              <input type="text" id="" placeholder="Last name..." className="inps" name="lname" onChange={handleData} /> 
              <small style={{ color: "red" }}>{error.lnameErr}</small>

          </div>
  
          <div className="mt-3"> 
              <input type="email" id="" placeholder="Email..." className="inps" name="email" onChange={handleData} />
              <small style={{ color: "red" }}>{error.emailErr}</small>

          
          </div>
          <div className="mt-3"> 
              <input type="tel" id="" placeholder="Contact...." className="inps" name="phone" onChange={handleData} /> 
              <small style={{ color: "red" }}>{error.phoneErr}</small>

          </div>
          <div className=" mt-3"> 
              <input type="text" id="" placeholder="image Url....." className="inps" name="avatar" onChange={handleData} /> 
              <small style={{ color: "red" }}>{error.avatarErr}</small>

          </div>
          <div className=" mt-3">
            <label for="avatar" >Gender:</label>
              <input type="radio" name="gender" value="male" onChange={handleData} />Male
              <input type="radio" name="gender" value="female" onChange={handleData} />Female <br />
              <small style={{ color: "red" }}>{error.genderErr}</small>

          </div>
          <div className="mt-3 mb-3">
              <input type="password" placeholder="Enter password" className="inps" name="password" onChange={handleData} />
              <small style={{ color: "red" }}>{error.passwordErr}</small>

          </div>
          <div className="form-checkmt-3">
            <label className="form-check-label"><br/>
              <input className="form-check-input" type="checkbox" name="remember"/> Remember me
            </label>
          </div>
         
           <div className="mt-4 buts">
            <button type="submit" className="btn">Submit</button>
           </div> 
           <div className="mt-3">
           <span>Register As <a href="">User</a></span> Or  <span>Login As <a href="">User</a></span>
          </div>     
        </form> 
    </div>
</div>
    </>
  )
}

export default AdminReg