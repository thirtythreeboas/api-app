import React from 'react';

export default function Item({ item }) {

  return (
    <div className="block">
      <h2>{item.name}</h2>
      <div className="info">
        <img src={item.images.icon} alt=""/>
        <div className="desc">
          <p>{item.introduction.text}</p>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}
