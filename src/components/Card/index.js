import React from 'react';
import LinkContainer from './LinkContainer'
import Tagline from './Tagline'
import Footer from './Footer'
import H3 from '../H3'

function Card({
  item
}){
  const formattedTaglineText = item.language.join(' - ');
  const formattedTechnologies = item.technologies.join(' - ');

  return (
    <LinkContainer href={item.url ? item.url : '#'} target={item.url ? '_blank' : '_self'} rel="noopener noreferrer">
      <Tagline>{formattedTaglineText}</Tagline>
      <H3>{item.name}</H3>
      <p>{item.description}</p>
      <Footer>{formattedTechnologies}</Footer>
    </LinkContainer>
  )
}

export default Card;