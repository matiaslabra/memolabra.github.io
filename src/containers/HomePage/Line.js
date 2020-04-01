
import styled, { css } from 'styled-components';
import {media} from '../../utils/styleUtils'

const Line = styled.div`
  margin-bottom: 8px;
  height: 56px;
  position: relative;
  overflow: hidden;
  mix-blend-mode: difference;

  span {
    position: absolute;
  
  }

  ${media.phone`
    margin-bottom: 2px;
    height: 44px;
  `}


  ${(props) => props.animationComplete && css`&:nth-child(2) > span{
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 90%;
    animation: Animation 0.5s ease-in;
  `}}

  @keyframes Animation {
    0%{background-position: 0% 130%}
    50%{background-position: 0% 100%;}
    100%{background-position: 0% 90%;}
  }


`;

export default Line;



  