import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const LinkContainer = styled.a`
  display: block;
  color: #000;
  background: #fff;
  margin: 0.75rem 0;
  padding: 2.5rem;
  text-decoration: none;
  transition: all .2s ease-in-out;
  border: 5px solid #000;
  box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.75);
  z-index: 1;
  cursor: ${props => props.href === '#' ? 'default' : 'pointer' };

  // Scale the item and reset the opacity (previously set to 0.5 by List component )
  &:hover{
    opacity: 1 !important; //sorry mom
    // background: linear-gradient(110deg, #fdcd3b55 60%, #ffed4b55 60%);
    transform: scale(1.1);
    transition: all .2s ease-in;
    box-shadow: none;
    z-index: 2; 
  }

  ${media.phablet`
    transition: none;
  
    &:hover{
      transform: none;
      box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.75);
    }
  `}

  &:first-child{
    margin-top: 0px;
  }


`;

export default LinkContainer;
