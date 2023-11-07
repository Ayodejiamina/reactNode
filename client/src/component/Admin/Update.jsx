import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ApiURl } from '../Constant'
import { useParams } from 'react-router-dom'
import { set } from 'mongoose'

function Update() {
    const { id } = useParams()
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        gender: "",
        avatar: "",
        phone: "",
        password: "",
    })
    useEffect(() => {
        axios.get(`http://localhost:3002/edit/` + id).then((res) => {
            setUser(res.data.updates)
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    const handleForm = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const submitForm = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3002/update/`+ id, user).then((res) => {
            console.log(res)
        })
    }

    return (
        <>
            <div className="cont">
                <div className="container-fluid form">
                    <form onSubmit={submitForm}>
                        <h2 className="text-center">Admin Registration</h2>
                        <div className="mt-3">

                            <input type="hidden" id="" placeholder="First name..." className="inps" name="id" value={user._id} onChange={handleForm} />
                        </div>
                        <div className="mt-3">

                            <input type="text" id="" placeholder="First name..." className="inps" name="fname" value={user.fname} onChange={handleForm} />
                        </div>
                        <div className="mt-3">

                            <input type="text" id="" placeholder="Last name..." className="inps" name="lname" value={user.lname} onChange={handleForm} />

                        </div>

                        <div className="mt-3">
                            <input type="email" id="" placeholder="Email..." className="inps" name="email" value={user.email} onChange={handleForm} />


                        </div>
                        <div className="mt-3">
                            <input type="tel" id="" placeholder="Contact...." className="inps" name="phone" value={user.phone} onChange={handleForm} />

                        </div>
                        <div className=" mt-3">
                            <input type="text" id="" placeholder="image Url....." className="inps" name="avatar" value={user.avatar} onChange={handleForm} />

                        </div>
                        <div className=" mt-3">
                            <label for="avatar" >Gender:</label>
                            <input type="radio" name="gender" value={user.gender} onChange={handleForm} />Male
                            <input type="radio" name="gender" value={user.gender} onChange={handleForm} />Female <br />

                        </div>
                        <div className="mt-3 mb-3">
                            <input type="password" placeholder="Enter password" className="inps" name="password" value={user.password} onChange={handleForm} />

                        </div>
                        <div className="form-checkmt-3">
                            <label className="form-check-label"><br />
                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>

                        <div className="mt-4 buts">
                            <button type="submit" className="btn">Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Update