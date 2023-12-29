import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
      display:'flex',
      justifyContent:'space-between',
      padding:"20px",
      backgroundColor:"white"
    }}>
      <Link to={"/"}>
        <div style={{display:'flex'}}><h1>Kalvium</h1> <img src="https://kalvium.community/images/sidebar-2d-logo.svg" alt="" /></div>
      
      </Link>

      <div  style={{
      display:'flex',
      justifyContent:'space-between',
      gap:"20px"
    }}>
      <Link to={"/contact"}>
        <h2>Contact us</h2>

      </Link>
        <Link to={"/form"}>
          <h2>Registration Form</h2>
        </Link>
      </div>
    </div>
  )
}

export default Navbar