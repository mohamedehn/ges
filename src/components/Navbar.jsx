import "../styles/Navbar.scss";
import { FiMenu, FiX } from 'react-icons/fi';



const Navbar = ({navbarLinks}) => {
    return(
        <nav className="navbar">
            <span className="navbarLogo">Green Energy Solutions</span>
            <ul className="navbarList">
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