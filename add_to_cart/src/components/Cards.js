import React, { createContext, useContext, useState } from "react";
import "./Cards.css";
import Data from "./Data";

export default function Cards({ src, name, price, description, onAddToCart}) {

  const handleAdd=()=>{
    const item={
      src:src,
      name:name,
      price:price,
      description:description
    }
    onAddToCart(item);
  }

  return (
    <div className="blur">
    <div className='container'>
      {/* <div className="mobile-container"> */}
      
        <div className="mobile-card">
          <img src={`${src}`} alt="Mobile 1" className="mobile-image" />
          <div className="mobile-details">
            <h2 className="mobile-name">{name}</h2>
            <h2 className="mobile-price">{price}</h2>
            <p className="desc">{description}</p>
            <button className="add-to-cart-btn" onClick={handleAdd} >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
