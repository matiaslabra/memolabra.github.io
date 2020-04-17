import styled from 'styled-components';
import { media } from '../../utils/styleUtils';

const LinkContainer = styled.a`
  display: flex;
  flex: 1 0 45%;
  color: #000;
  margin: 1rem 1rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  height: 100%;
  border: 2px solid black;

  // Scale the item and reset the opacity (previously set to 0.5 by List component )
  &:hover {
    opacity: 1 !important;
    ${'' /* transform: scale(1.1); */}
    transition: all .2s ease-in;
    box-shadow: none;
  }
  ${media.tablet`
    
    transition: none;
  
    &:hover{
      transform: none;
      box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.75);
    }

    &:first-child{

    }
  `}

  ${media.phablet`
    flex: 1 0 100%;
  `}
`;

export default LinkContainer;
