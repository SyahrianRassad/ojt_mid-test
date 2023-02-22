import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from "axios"

import './css/register.css'

function Register(){
    const navigate = useNavigate()

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPass] = useState([])
    const [gender, setGen] = useState([])
    const [dateBirth, setDate] = useState([])
    const [phoneNumber, setPhone] = useState([])
    const [city, setCity] = useState([])

    const registration = (event) =>{
        event.preventDefault()
        const sendData ={
            name: name,
            email: email,
            password: password,
            datebirth: dateBirth,
            gender: gender,
            phoneNumber: phoneNumber,
            city: city
        }
        const url = "http://localhost:3030/user/"
        axios.post(url, sendData)
        .then(response => {
            navigate('/')
            
        })
        .catch(error =>{
            window.alert("Registrasi gagal")
            console.log(error)
        })
    }
    return(
        <div class="wrapper bg-white">
    <div class="h2 text-center">Mini</div>
    <div class="h2 text-center">Project</div>
    <div class="h5 font-weight-bold">Registration</div>
    <div class="text-muted">Enter your registration details</div>
    <form onSubmit={ev => registration(ev)}>
        <div class="d-sm-flex align-items-sm-center justify-content-sm-between pt-1">
            <div class="form-group">
                <label class="text-muted mandatory">Name</label>
                <input type="text" required class="form-control" onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="form-group">
                <label class="text-muted mandatory">Email Address</label>
                <input type="email" required class="form-control" onChange={(e) => setEmail(e.target.value)}/>
            </div>
        </div>
        <div class="d-sm-flex align-items-sm-center justify-content-sm-between pt-1">
            <div class="form-group">
                <div>
                    <label class="text-muted mandatory">Gender</label>
                </div>
                <div class="btn-group" data-toggle="buttons">
                    <select className="form-control mb-1" name="level"  onChange={(e) => setGen(e.target.value)} autoComplete="off" >
                        <option type="text"></option>
                        <option class="form-check-input" type="radio" value='laki-laki'>Male</option>
                        <option class="form-check-input" type="radio" value='perempuan'>Female</option>
                    </select>
                </div>
            </div>
            <div class="form-group position-relative py-2 px-5">
                <label class="text-muted">Date of Birth</label>
                <input type="date" class="form-control" onChange={(e) => setDate(e.target.value)}/>
            </div>
        </div>
        <div class="d-sm-flex align-items-sm-center justify-content-sm-between pt-1">
            <div class="form-group">
                <label class="text-muted mandatory">Phone Number</label>
                <input type="tel" required class="form-control" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div class="form-group">
                <label class="text-muted">City</label>
                <input type="text" class="form-control" onChange={(e) => setCity(e.target.value)}/>
            </div>
        </div>
        <div class="form-group">
            <label class="text-muted mandatory">Password</label>
            <input type="password" required class="form-control" onChange={(e) => setPass(e.target.value)}/>
        </div>
        <div class="d-flex align-items-center justify-content-sm-end button-section p-2">
            <button class="btn btn-primary mx-4" type="submit">Submit</button>
            <Link className='btn' to='/'>Cancel</Link>
        </div>
    </form>
</div> 
    )
}

export default Register;