import "../styles/Navbar.scss";
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from "react";



const Navbar = ({navbarLinks}) => {

    const [menuClicked, setMenuClicked] = useState(true);

    const toggleMenu = () => {
        setMenuClicked(!menuClicked)
    }

    return(
        <nav className="navbar">
            <span className="navbarLogo">Green Energy Solutions</span>
            {menuClicked? <FiMenu size={25} className="navbarMenu" onClick={toggleMenu}/> : 
            <FiX size={25} className="navbarMenu" onClick={toggleMenu}/> }
            <ul className={menuClicked? "navbarList" : "navbarList navbarListActive"}>
            {navbarLinks.map((item) =>{
                return (
                <li className="navbarItem" key={item.title}>
                    <a href={item.url} className="navbarLink">{item.title}</a>
                </li>
                );
            })}
            </ul>
        </nav>
    )
}

export default Navbar