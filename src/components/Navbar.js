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
            
        </>
    )
}

export default Navbar
