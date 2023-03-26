import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserTie} from "react-icons/fa"
function Navbar() {
  return (
    <div>
       {/* <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand">Navbar</a>
  <form className="form-inline">
  
    <Link className="btn btn-outline-success my-2 my-sm-0" to="/adduser">Add User</Link>
  </form>

</nav> */}
<div className="navbar" >
  <p style={{
    marginLeft:"20px",
    color:"white",
    fontSize:"30px"
  }}>
    User Management App</p>
  <Link className="new-btn" style={{marginRight:"20px"
  }} to="/adduser"><p style={{marginBottom:"-2px"}}>Add 
  User</p> <FaUserTie size={20} color="white"/></Link>
  
</div>
      
    </div>
  )
}

export default Navbar