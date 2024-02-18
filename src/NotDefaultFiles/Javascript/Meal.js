import React from "react";
import bruchetta from '../IconSet/bruchetta.svg';
import '../Styles/Meal.css'

const Meal = () => {
    return (
        <div className="Meal1">
            <img src={bruchetta} alt='Bruchetta' className="Bruchetta" ></img>
            <div className="trynnacook">
                <h1 className="Bruschettatxt">Bruschetta</h1>
                <h4 className="Text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with chopped tomatoes, oregano and fresh bazil.</h4>
            </div>
        </div>
    )
}

export default Meal