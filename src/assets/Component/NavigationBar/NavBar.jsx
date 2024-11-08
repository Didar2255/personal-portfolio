import React from 'react'
import './Navbar.css'
import { FaHome } from "react-icons/fa";

function NavBar() {
    return (
        <div className='navBar text-white' >
            <div>
                <h1 className='text-4xl'>Didar <span className='text-amber-500'>Bokth</span></h1>
                <p>UI/UX designer</p>
            </div>
            <div className='home-icon'>
                <FaHome className='icon' />
                <h3>Home</h3>
            </div>
            <button className='button text-amber-400'>Talk To Me</button>
        </div>
    )
}

export default NavBar