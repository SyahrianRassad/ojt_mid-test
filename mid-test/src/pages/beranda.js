import { useState, React, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from 'axios'

// import List from "./listMahasiswa";
import NavBar from "../component/navbar";
import c1 from "../assets/avatar.jpg"

import './css/beranda.css'

function Beranda(){

//   const mahasiswa = useSelector((state) => state.mahasiswa.mahasiswa) // data diambil melalui redux
//   const username = useSelector((state) => state.username.username)
  const [user, setUser] = useState([])

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("petugas")))
    // console.log(data)
  },[])

//   console.log(mahasiswa2)

//   const arr = mahasiswa2.map(((data, index) =>{ //harusnya mahasiswa2
//     return (
//       <div className="">
//           <List
//               maha = {data}
//           />
//       </div>
//     )
//   }))
    console.log(user.name)
    return(
        <div className="background-image">
          <NavBar />
          <div className="container p-5">
            <div className="card">
              <div className="card-body">
                <h1>Welcome to Mini Project {user.name}</h1>
                <div className="row">
                  <div className="col">
                    <img class="img-thumbnail" src={c1} alt="Sale" width="300px" height="300px" />
                  </div>
                  <div className="col m-4">
                    <div className="p-2">
                      <h4>User</h4>
                      <h5>{user.name}</h5>
                    </div>
                    <div className="p-2">
                      <h4>Date Birth</h4>
                      <h5>{user.datebirth}</h5>
                    </div>
                    <div className="p-2">
                      <h4>Phone Number</h4>
                      <h5>{user.phoneNumber}</h5>
                    </div>
                  </div>
                  <div className="col m-4">
                    <div className="p-2">
                      <h4>Email</h4>
                      <h5>{user.email}</h5>
                    </div>
                    <div className="p-2">
                      <h4>City</h4>
                      <h5>{user.city}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
    
}

// const mapStoreToProps = (state) => {
//   return{
//       username: state.username
//   }
// }

export default (Beranda)