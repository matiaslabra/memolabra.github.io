import React from 'react';
import A from './A';
import Tagline from './Tagline';
import Footer from './Footer';
import H3 from '../H3';

function Card({ item }) {
  return (
    <A
      href={item.url ? item.url : '#'}
      target={item.url ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      <Tagline>{item.language ? item.language.join(' - ') : ''}</Tagline>
      <H3>{item.name}</H3>
      <p>{item.description}</p>
      <Footer>{item.technologies ? item.technologies.join(' - ') : ''}</Footer>
    </A>
  );
}

export default Card;
