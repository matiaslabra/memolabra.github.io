import React from 'react';
import A from './A'
import Tagline from './Tagline'
import H3 from '../H3'

function Card({
  item
}){

  return (
    <A href={item.url}>
      <Tagline>{item.language}</Tagline>
      <H3>{item.name}</H3>
      <p>{item.description}</p>
      {/* <footer>{item.technologies}</footer> */}
    </A>
  )
}

export default Card;