import React, { useState } from "react";
import "../styles/card.css"
import {FaUser} from "react-icons/fa";


function Cards(){

    const [name, setName] = useState("Name");
    const [price,setPrice] = useState("Price");
    const [users, setUsers] = useState("1-50");
    const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");


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
                    {name}
                </p>
            </div>

            <div className="priceUsers">
                <p className="price">
                    {price} /day
                </p>
                <p className="users">
                    <FaUser></FaUser> {users}
                </p>

            </div>

            <div className="description">
                <p>
                {description}
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

export default Cards;