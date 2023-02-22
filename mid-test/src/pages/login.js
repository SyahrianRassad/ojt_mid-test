import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector} from "react-redux"
import { tambahUsername } from "../store/data"
import axios from 'axios'

import './css/login.css'

function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [logged, setLogged] = useState(true)
    const username= useSelector((state) => state.data.username)

    // const saveData = (e)=>{
    //     dispatch(tambahUsername(e.target.value))
    // }

    const login = (event) =>{
        event.preventDefault()
        const sendData ={
            email: email,
            password: password
        }
        const url = "http://localhost:3030/user/login"
        axios.post(url, sendData)
        .then(response => {
            let user = response.data.user
            let token = response.data.token
            localStorage.setItem("petugas", JSON.stringify(user))
            localStorage.setItem("token", token)
            navigate('/beranda')
            
        })
        .catch(error =>{
            setLogged(false)
            console.log(error)
        })
        
        setLogged(false)
        // navigate('/beranda')
    }
    return(
        <div id="mainContainer">
        <div class="">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-xs-12 d-none d-lg-block d-md-block">
            <div id="mainBgn"></div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12">
            <div class="p-4 centerOnMobile" >
                <div class="formContainer">
                {!logged ?
                    (
                        <alert className="alert alert-danger mt-1">
                            Invalid Username or password
                        </alert>
                    ) : null
                }
                <h2 class="p-2 h4 text-center"><i class="fas fa-lock me-2"></i> Login</h2>
                <form onSubmit={ev => login(ev)}>
                    <div class="form-floating my-3">
                    <input class="form-control" id="floatingInput" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} role='check-input'/>
                    <label for="floatingInput">email</label>
                    </div>
                    <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label for="floatingPassword">Password</label>
                    </div>
                    <div class="mt-3">
                    <input type="checkbox" /> Remember me
                    </div>
                    <div id="btnHolder">
                    <button class="btn btn-lg btn-primary mt-3 w-100" type="submit">Login</button>
                    </div>
                </form>
                </div>
                <div class="mt-2 text-center">
                <a href="/register">New? signup</a><br />
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Login;