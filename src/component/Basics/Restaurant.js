import React, { useState } from 'react'
import "./style.css"
import Menu from "./menueApi.js"
import MenuCard from "./MenuCard"
import Navbar from "./Navbar"
const uniquelist= [
  ...new Set(Menu.map((curElem)=>{               //here []is used to turn unique elements into an array
  return curElem.category;
})),"All"]
console.log(uniquelist);
const Restaurant = () => {
  const [menuData,setmenudata]=useState(Menu);   //should be added on first line in functional component
  const [menulist,setmenulist]=useState(uniquelist);
  
  const filteritem=(categoryofitem)=>{
    if (categoryofitem==="All"){
      return setmenudata(Menu);
    }
        const updatedlist=Menu.filter((curElem)=>{
          return curElem.category===categoryofitem  ;            //return that current element whose category is equal to the passed parameter(category of item)
        })
        setmenudata(updatedlist)
  }
  return (
    <>
    <Navbar Filteritem={filteritem} menulist={menulist}/>
    <MenuCard menuData={menuData}/> 
    </>
  )
}

export default Restaurant  
