import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ApiURl } from '../Constant'
function Show() {
    const [user, setUser] = useState([])
    function FetchUser() {
        const url = 'http://localhost:3002/show'
        axios.get(url).then((res) => {
            // console.log(res)
            setUser(res.data.users)

        })
    }
    useEffect(() => {
        FetchUser()
    }, [])
    const deleteForm = async (id) => {
        await axios.post(`${ApiURl}/delete`, { id })
        window.location.reload()
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        user ?
                            user.map((value) => {
                                return (
                                    <div className='col-lg-4 mt-5'>
                                        <img src={value.avatar} style={{ width: "100%", height: "200px" }} />
                                        <p>{value.fname}</p>
                                        <p>{value.lname}</p>
                                        <p>{value.gender}</p>
                                        <p>{value.phone}</p>
                                        <p>{value.email}</p>
                                        <div className='d-flex justify-content-between'>

                                            <button type='button' onClick={() => deleteForm(value._id)}>Delete</button>

                                            {/* 
                                          <form action="http://localhost:3002/delete" method="post">
                                           <input type='hidden' name='id' value={value._id} />   
                                              <button type='submit'>Delete</button>
                                          </form> */}

                                            <Link to={`/update/${value._id}`}>Update</Link>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <h2>Loadng!!!!</h2>
                    }


                </div>

            </div>

        </>
    )
}

export default Show