import React from 'react';
import LinkContainer from './LinkContainer'
import Tagline from './Tagline'
import H3 from '../H3'

function Card({
  item
}){

  return (
    <LinkContainer href={item.url} target="_blank" rel="noopener noreferrer">
      <Tagline>{item.language}</Tagline>
      <H3>{item.name}</H3>
      <p>{item.description}</p>
      {/* <footer>{item.technologies}</footer> */}
    </LinkContainer>
  )
}

export default Card;