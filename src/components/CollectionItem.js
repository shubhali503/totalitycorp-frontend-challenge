import React from 'react'

export default function CollectionItem({citem}) {
  return (
    <a href="#" className='collection__list-item'>
        <div>
            <span className='item-number'>{citem.id}</span>
            <img src={citem.image} alt="" />
            <span className='item-title'>{citem.title}</span>
        </div>
        <span>{citem.price}</span>
        <span>{citem.volume}</span>
    </a>
  )
}
