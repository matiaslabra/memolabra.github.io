import styled from 'styled-components';
import Section from './Section';
import {media} from '../../utils/styleUtils'

const RightSection = styled(Section)`
  right: 0;
  position: absolute;
  width: 768px;
  flex-direction: column;

  ${media.desktop`
    position: absolute;
    width: 560px;
  `}
  
  ${media.tablet`
    position: static;
    height: auto;
    width: 100%;
  `}

`;

export default RightSection;
