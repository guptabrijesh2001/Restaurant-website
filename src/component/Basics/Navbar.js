import React from 'react'

const Navbar = ({Filteritem,menulist}) => {
  return (
    <div>
      <nav className='navbar'>
      <div className="btn-group">
        {
            menulist.map((curElem)=>{
                return <button className="btn-group__item" onClick={()=>Filteritem(curElem)}>{curElem}</button> //here we can not write curElem.catgory because we are rendering the whole cards onClick,we are not rendering buttons
            })
        }

      </div>
     </nav>
    </div>
  )
}

export default Navbar
