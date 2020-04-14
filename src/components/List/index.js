import React from 'react';
import ListWrapper from './ListWrapper';

function List({items, component}){
  const ComponentToRender = component
  return (
    <ListWrapper>
    {items.map((item,key)=>{
      return <ComponentToRender item={item} key={key}/> 
      })
    }
  </ListWrapper>
  )
}

export default List;