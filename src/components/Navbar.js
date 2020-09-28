import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { Button} from 'react-bootstrap';
function Navbar() {
    return (
        <>
        <ul>
        <Link  to="/">
        <Button className="homelink" renderAs="button">
           <span>Home</span>
           </Button></Link>
        </ul>
         {/* <ul>
         <Link to="/AddLink">Add Links   </Link>
         </ul>
         <ul>
         <Link to="/Arrange">Arrange links   </Link>
         </ul>
         <ul>
         <Link to="/PlayVideo">Play videos   </Link> 
         </ul> */}

          
           
           
        </>
    )
}

export default Navbar
