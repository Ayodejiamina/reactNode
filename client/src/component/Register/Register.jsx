
import React from 'react'
import {ApiURl} from '../Constant' 
function Register() {
  return (
    <>
       <div className="cont">
    <div className="container-fluid formss">
       <form action = {`${ApiURl}/register`} method="post" encType='multipart/formdata' >
        <h2 className="text-center">User Registration</h2>
        <div className="mt-3"> 
        
            <input type="text"  id="" placeholder="First name..." className="inps" name="fname"/> 
          </div>
          <div className="mt-3"> 
       
            <input type="text"  id="" placeholder="Last name..."className="inps" name="lname" /> 
          </div>
  
          <div className="mt-3"> 
            <input type="email"  id="" placeholder="Email..."className="inps" name="email" />
          
          </div>
          <div className="mt-3"> 
            <input type="tel"  id="" placeholder="Contact...."className="inps" name="phone" /> 
          </div>
          <div className=" mt-3"> 
            <input type="text"  id="" placeholder="image Url....."className="inps" name="avatar" /> 
          </div>
          <div className=" mt-3">
            <label for="avatar" >Gender:</label>
            <input type="radio" name="gender" value="male"/>Male
            <input type="radio" name="gender" value="female"/>Female
          </div>
          <div className="mt-3 mb-3">
            <input type="password"  placeholder="Enter password" className="inps" name="password" />
          </div>
          <div className="form-check mb-3 mt-3">
            <label className="form-check-label"><br/>
              <input className="form-check-input" type="checkbox" name="remember"/> Remember me
            </label>
          </div>
         
           <div className="mt-4 buts">
            <button type="submit" className="btn">Submit</button>
           </div> 
           <div className="mt-3 mb-3">
           <span>Register As <a href="">Admin</a></span> Or  <span>Login As <a href="">Admin</a></span>
          </div>     
        </form> 
    </div>
</div>
    </>
  )
}

export default Register