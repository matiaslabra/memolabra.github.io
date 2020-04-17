import React from 'react';
import LinkContainer from './LinkContainer';
import Footer from './Footer';
import H3 from '../H3';
import Box from './Box.js';

function ImageCard({ item, onClickAction }) {
  let img = require(`../../assets/${item.link}`);
  return (
    <LinkContainer
      href={item.url}
      onClick={(e) => {
        e.preventDefault();
        onClickAction(e);
      }}
    >
      <Box basis="45%">
        <img src={img} alt="project" />
      </Box>
      <Box basis="55%" padding="2.5rem">
        <H3>{item.name}</H3>
        <p>{item.description}</p>
        <Footer>
          {item.technologies ? item.technologies.join(' - ') : ''}
        </Footer>
      </Box>
    </LinkContainer>
  );
}

export default ImageCard;
