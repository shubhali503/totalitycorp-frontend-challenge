import React from 'react'
import CollectionList from './CollectionList'

export default function Collection({items}) {
  return (
    <div className="collection">
        <div className="collection__header">
            <span>Collection</span>
            <span>Floor Price</span>
            <span>Volume</span>
        </div>
        <CollectionList listitems={items}/>
    </div>
  )
}
