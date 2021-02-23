import React from 'react'
import FoodCard from "./FoodCard/FoodCard"
import food_menu from "./food-menu.json"
import uniqid from "uniqid"
import "./food-menu.css"

const FoodMenu = () => {
    return (
        <div className="info-graphic">
            <h1 className="food-menu-h1">Food Menu</h1>
            <div className="food-card-container">
                {food_menu.map(category => (
                    <FoodCard
                        name={category.name}
                        orders={category.orders}
                        key={uniqid()}
                    />
                ))}
            </div>


        </div>
    )
}

export default FoodMenu
