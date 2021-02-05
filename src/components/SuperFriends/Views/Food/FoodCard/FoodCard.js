import React, { useState } from 'react'


const FoodCard = () => {

    const [categoryToggle, setCategoryToggle] = useState(false);

    return (
        <div className="food-card-container">
            <div className="menu-toggle">
                <div className="icon"></div>
                <h3>Category Title</h3>
            </div>
            <div className="category-items">

            </div>
        </div>
    )
}

export default FoodCard
