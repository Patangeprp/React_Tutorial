import React, { createContext, useContext, useState } from "react";
import "./Cards.css";

export default function Cards({ src, name, price, description, theme }) {
  return (
    <div className='container'>
      <div className="mobile-container">
        <div className="mobile-card">
          <img src={`${src}`} alt="Mobile 1" className="mobile-image" />
          <div className="mobile-details">
            <h2 className="mobile-name">{name}</h2>
            <h2 className="mobile-price">{price}</h2>
            <p className="desc">{description}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
