import React from 'react'
import './admin.css'
import axios from 'axios'
import { ApiURl } from '../Constant'
import { useEffect, useState } from 'react'

function AdminLog() {
  const [data, setData] = useState({

    email: "",
    password: "",
  })
  const [error, setError] = useState({

    emailErr: "",
    passwordErr: "",
  })
  const handleData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submitData = async (e) => {
    e.preventDefault();
    const pushErr = {}

    if (data.email.trim() == "" || data.email.trim() == null) {
      pushErr.emailErr = "email is require"
    }
    else if (!(data.email.endsWith('@yahoo.com') || data.email.endsWith("@gmail.com"))) {
      pushErr.emailErr = "Invalid Email Address"
    }
 
    if (data.password.trim() == "" || data.password.trim() == null) {
      pushErr.passwordErr = "password is require"
    }
    if (Object.keys(pushErr).length > 0) {
      setError(pushErr)
    }
    else {
      try {
        const res = await axios.post(`${ApiURl}/login`, data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      <div class="cont">
    <div class="container-fluid form">
       <form  class="forms" onSubmit={submitData}>
        <h2 class="text-center">Admin Login</h2>
      
  
          <div class="mt-3"> 
              <input type="email" id="" placeholder="Email..." class="inps" name="email" onChange={handleData}/>
              <small style={{ color: "red" }}>{error.emailErr}</small>

          </div>
         
          <div class="mt-3 mb-3">
              <input type="password" placeholder="Enter password" class="inps" name="password" onChange={handleData} />
              <small style={{ color: "red" }}>{error.passwordErr}</small>

          </div>
       
           <div class="mt-4 buts">
            <button type="submit" class="btn">Submit</button>
           </div> 
           <div class="container">
            <div class="cont-or">
              <hr/>
              <div  class="text-center or"><span class="">Or</span></div>
            </div>
            
              <div class='icon'>
                <a href=""><i class='fab fa-facebook face mx-2'></i></a>
                 <a href=""><i class='fab fa-twitter twit mx-2'></i></a>
                <a href=""><i class='fab fa-instagram insta mx-2'></i></a>
                <a href="https://wa.me/08107905908"><i class='fab fa-whatsapp what mx-2'></i></a>
               <a href="https://google.com"><i class='fab fa-google goo mx-2'></i></a>
               </div>
          </div>
        </form> 
    </div>
</div>
    

    </>
  )
}

export default AdminLog