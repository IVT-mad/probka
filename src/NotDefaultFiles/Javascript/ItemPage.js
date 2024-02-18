import React, { useState } from "react";
import goback from '../IconSet/goback.png'
import logo from '../IconSet/Logo .svg'
import basket from '../IconSet/basket .svg'
import { useNavigate } from 'react-router-dom';
import car from '../Images/66841.png'
import '../Styles/ItemPage.css'
import Meal from "./Meal";
import Option from "./Option";
import BottomComponent from "./BottomComponent";

const Item = () => {
    const navigate = useNavigate();
    const [myVariable, setMyVariable] = useState(20);
    const handleGoBack = () => {
    // Use the navigate function to go back to the main page
    navigate('/');
    };

    const changeButton = () => {
        setMyVariable(Math.floor(Math.random() * 100));
    };

    return (
        <div className="container">
            <img onClick={handleGoBack} src={goback} alt='GoBack' className="photo" ></img>
            <img src={logo} alt='LittleLemonLogo' className="Logo" ></img>
            <img src={basket} alt='Basket' className="Basket" ></img>
            <Meal />
            <div className="DelTime">
                <img src={car} alt='Car sign delivery' className="Car"></img>
                <h4>Delivery time: <b>{myVariable} minutes</b></h4>
                <button onClick={changeButton} alt='Change time' className="Button2change">Change</button>
            </div>
            <div className="ProductChoose">
                <h1 className="Bruschettatxt">Add</h1>
                <Option />
            </div>
            <BottomComponent />
        </div>
    )
}

export default Item