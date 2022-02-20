import React, {useState} from "react";
import "../styles/navbar.css"
import logo from '../../assests/logo/Logo.svg'
import {FaSearch, FaRegUserCircle, FaBars} from "react-icons/fa";

function Navbar(){

    const [showDropdown, setShowDropdown] = useState(false);

    return(
        <div className="Navbar">
            <div className="leftNav">
                <img className="logo" src={logo} alt='logo'/>
            </div>

            <div className="middleNav">
                <form>
                    <input type="text" name='name'  placeholder="Search"></input>
                </form>
            </div>

            <div className="rightNav" >
                <div className="links" id={showDropdown ? "hidden" : ""}>
                <a href="/">Explore</a>
                <a href="/">Resources</a>
                <a href="/">
                <FaRegUserCircle className="UserIcon"></FaRegUserCircle>
                </a>

                </div>
                

                <button onClick={()=> setShowDropdown(!showDropdown)}>
                    <FaBars className="collapseButton"></FaBars>
                </button>
                
            </div>

        </div>
    )
}

export default Navbar;

