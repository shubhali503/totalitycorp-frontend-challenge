import React from 'react'
import CollectionItem from './CollectionItem'

export default function CollectionList({listitems}) {
  return (
    <div className="collection__list">
      {listitems.map(item => {
        return(
          <CollectionItem citem={item} key={item.id}/>
        )
      })}
    </div>
  )
}

