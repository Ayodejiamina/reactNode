import { useState } from 'react'
import Home from './component/Home'
import AdminLog from './component/Admin/AdminLog'
import AdminReg from './component/Admin/AdminReg'
import Register from './component/Register/Register'
import Login from './component/Login/Login'
import Show from './component/Admin/show'
import Update from './component/Admin/Update'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/adminLog' element={<AdminLog/>}/>
      <Route path='/adminReg' element={<AdminReg/>}/>
          <Route path='/user' element={<Show />} />
          <Route path='/update/:id' element={<Update />} /> 
      {/* <Route path='' element={}/> */}

    </Routes>
    
    </BrowserRouter>

     </>
  )
}

export default App
