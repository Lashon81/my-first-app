import React from 'react'

export const ProductCard = ({title, imageurl, price}) => {
  return (
    <div>
        <div className="card">
  <img src= {imageurl} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"> $ {price}</p>
    
  </div>
</div>
    </div>
  )
}
