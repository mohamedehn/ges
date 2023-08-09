import "../styles/Navbar.scss";
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from "react";
import logo from "../assets/logo2.webp"
import { NavLink } from "react-router-dom";
import {IoLogoFacebook} from "react-icons/io"
import {BsInstagram} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import React from "react";


const Navbar = ({navbarLinks}) => {

    const [menuClicked, setMenuClicked] = useState(true);

    const toggleMenu = () => {
        setMenuClicked(!menuClicked)
    }

    return(
        <nav className="navbar">
            <img src={logo} alt="" style={{width : '50px', position: 'absolute', left: "-9px"}}/>
            <span className="navbarLogo">Green Energy Solutions</span> 
            {menuClicked? <FiMenu size={25} className="navbarMenu" onClick={toggleMenu}/> : 
            <FiX size={25} className="navbarMenu" onClick={toggleMenu}/> }
            <ul className={menuClicked? "navbarList" : "navbarList navbarListActive"}>
            {navbarLinks.map((item) =>{
                return (
                <li className="navbarItem" key={item.id}>
                    <NavLink to={item.url} className="navbarLink">{item.title}</NavLink>
                </li>
                );
            })}
            <li className="navbarExtList">
                <a href="https://www.instagram.com/greenenergysolutions_/" className="navbarLink"><BsInstagram/></a>
                <a href="https://www.linkedin.com/company/gesfrance/" className="navbarLink"><AiFillLinkedin/></a>
                <a href="https://www.facebook.com/profile.php?id=100083332664949" className="navbarLink"><IoLogoFacebook/></a>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar