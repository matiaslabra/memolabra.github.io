import React from "react";
import LinkContainer from "./LinkContainer";
// import Tagline from './Tagline'
// import Footer from './Footer'
// import H3 from '../H3'

function Card({ item }) {
  let img = require(`../../assets/${item.url}`);
  return (
    <LinkContainer>
      <img src={img} alt="project" />
    </LinkContainer>
  );
}

export default Card;
