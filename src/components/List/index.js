import React from 'react';
import Card from '../../components/Card';
import ListWrapper from './ListWrapper';

function List({items}){
  
  return (
    <ListWrapper>
    {items.map((item,key)=>{
      return <Card item={item} key={key}/> 
      })
    }
  </ListWrapper>
  )
}

export default List;