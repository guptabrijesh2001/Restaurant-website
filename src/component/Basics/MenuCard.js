import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className="main-card--cointainer">
      {menuData.map((curElem)=>{
        const{id,name,category,image,description}=curElem;           {/*destructuring*/}
        return (
         <>
          <div className="card-container" key={curElem.id}>
            <div className="card">
             <div className="card-body">
              <span className="card-number card-circle subtle">{id}</span>
              <span className="card-author subtle">{category}</span>
              <h2 className="card-description subtle">{name}</h2>
              <span className="card-description subtle">{description}
              </span>
              <div className="card-read">Read</div>
              <img src={image} alt="images" className="card-media"/>
              <span className="card-tag subtle">Order Now</span>
             </div>
            </div>
          </div>
          </>
        )
      })}
      </section>
    </>
  )
}

export default MenuCard
