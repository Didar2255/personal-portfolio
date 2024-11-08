import React from 'react'
import './Header.css'
import img from '../../../../imgaes/man.png'
import { FaHome, FaEdit, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { BiBriefcase } from "react-icons/bi";
import { FaMessage } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";



function Header() {
    return (
        <div>
            <div className="sideBar">
                <a href="#"><FaHome /></a>
                <a href="#"><GoPeople /></a>
                <a href="#"><BiBriefcase /></a>
                <a href="#"><FaEdit /></a>
                <a href="#"><FaMessage /></a>
            </div>
            <div className="image-section">
                <div className="image">
                    <img src={img} alt="" />
                    <div className='img-icon'>
                        <FaFacebookF className='icons' />
                        <FaLinkedinIn className='icons' />
                        <FaInstagram className='icons' />
                        <FaTwitter className='icons' />
                    </div>
                </div>
                <div className="header-text text-white ">
                    <h5 className='text-amber-600'>INTRODUCTION</h5>
                    <h1 className='text-5xl'>I'm a Creative Developer & UI/UX Designer Expert</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere consectetur. Quis minus, laudantium illum asperiores nostrum voluptates? Ab ipsa a illum, repellendus perferendis voluptates quia officia eligendi impedit et.</p>
                    <button className='download-button'>Download Cv <MdDownload className='download-icon' /></button>
                </div>
            </div>
        </div>
    )
}

export default Header