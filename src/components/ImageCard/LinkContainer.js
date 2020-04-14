import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const LinkContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1 0 45%;
  color: #000;
  margin: 1rem 1rem;
  text-decoration: none;
  transition: all .2s ease-in-out;
  height:100%;
  border: 2px solid black;

  // Scale the item and reset the opacity (previously set to 0.5 by List component )
  &:hover{
    opacity: 1 !important; //sorry mom
    // background: linear-gradient(110deg, #fdcd3b55 60%, #ffed4b55 60%);
    ${'' /* transform: scale(1.1); */}
    transition: all .2s ease-in;
    box-shadow: none;
  }
  & > img {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    height: 100%;
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
