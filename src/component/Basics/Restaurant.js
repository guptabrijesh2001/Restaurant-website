import React, { useState } from 'react'
import "./style.css"
import Menu from "./menueApi.js"
import MenuCard from "./MenuCard"
const Restaurant = () => {
  const [menuData]=useState(Menu);   //should be added on first line in functional component
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__items">Breakfast</button>
        <button className="btn-group__items">Lunch</button>
        <button className="btn-group__items">Evening</button>
        <button className="btn-group__items">Dinner</button>
        <button className="btn-group__items">All</button>
      </div>
     </nav>
     <MenuCard menuData={menuData}/> 
    </>
  )
}

export default Restaurant
