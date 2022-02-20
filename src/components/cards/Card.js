import React, { useState } from "react";
import "../styles/card.css"
import {FaUser} from "react-icons/fa";


function Card(){

    const [name, setName] = useState("name");
    const [price,setPrice] = useState("price");
    const [users, setUsers] = useState("users");
    const [description, setDescription] = useState("description");


    return(
        <div className="card">
            <div className="cover">
                <img src="https://thesmallbusinessblog.net/wp-content/uploads/2021/04/The-Best-Crypto-Trading-Bots.png"></img>
            </div>
            <div className="dp">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1024px-Electron_Software_Framework_Logo.svg.png">
                </img>
            </div>

            <div className="name">
                <p>
                    Name
                </p>
            </div>

            <div className="priceUsers">
                <p className="price">
                    5.0$ /day
                </p>
                <p className="users">
                    <FaUser></FaUser> 1-50
                </p>

            </div>

            <div className="description">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
            </div>

            <div className="button1">
                <button>
                    Learn more
                </button>

            </div>
            
        </div>
    )

}

export default Card;