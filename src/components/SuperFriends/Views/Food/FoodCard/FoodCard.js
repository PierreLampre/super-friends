import React from 'react'
import "./food-card.css"

const FoodCard = ({  name, orders }) => {

   
    return (
        <div className="food-card">
            <h2>{name}</h2>
                {orders.map(order => (
                    <div className="order">
                        <div className="price-and-name">
                            <h3 className="order-name">{order.name}</h3>
                            <h4 className="order-price">{order.price}</h4>
                        </div>
                        
                        <p className="order-desc">{order.description}</p>
                    </div>
                ))}
        </div>
    )
}

export default FoodCard
