import React, {useState} from "react";
import "../styles/navbar.css"
import logo from '../../assests/logo/Logo.svg'
import {FaSearch, FaRegUserCircle, FaBars} from "react-icons/fa";

function Navbar(){

    const [showDropdown, setShowDropDowns] = useState(true);

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
                <div id={setShowDropDowns ? "hidden" : ""}>
                <a href="/">Explore</a>
                <a href="/">Resources</a>
                <a href="/">
                <FaRegUserCircle className="UserIcon"></FaRegUserCircle>
                </a>

                </div>
                

                <button >
                    <FaBars></FaBars>
                </button>
                
            </div>

        </div>
    )
}

export default Navbar;

