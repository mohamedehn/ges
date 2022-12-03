import "../styles/Navbar.scss";
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from "react";
import logo from "../assets/logo2.png"
import { NavLink } from "react-router-dom";


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
                    {/* <a href={item.url} className="navbarLink">{item.title}</a> */}
                </li>
                );
            })}
            </ul>
        </nav>
    )
}

export default Navbar