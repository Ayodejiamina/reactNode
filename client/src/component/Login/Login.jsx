import React from 'react'
import './Login.css'

function Login() {
  return (
    <>
        <div className="cont">
    <div className="container-fluid form">
       <form action="/userLog" method="post"  className="forms">
        <h2 className="text-center">User Login</h2>
      
  
          <div className="mt-3"> 
            <input type="email"  id="" placeholder="Email..."className="inps" name="email" />
          
          </div>
         
          <div className="mt-3 mb-3">
            <input type="password"  placeholder="Enter password" className="inps" name="password" />
          </div>
       
           <div className="mt-4 buts">
            <button type="submit" className="btn">Submit</button>
           </div> 

           <div className="container">
            <div className="cont-or">
              <hr/>
              <div  className="text-center or"><span className="">Or</span></div>
            </div>
            
              <div className='icon'>
                <a href=""><i className='fab fa-facebook face mx-2'></i></a>
                 <a href=""><i className='fab fa-twitter twit mx-2'></i></a>
                <a href=""><i className='fab fa-instagram insta mx-2'></i></a>
                <a href="https://wa.me/08107905908"><i className='fab fa-whatsapp what mx-2'></i></a>
               <a href="https://google.com"><i className='fab fa-google goo mx-2'></i></a>
               </div>
          </div>
          
        </form> 
    </div>
</div>
    </>
  )
}

export default Login