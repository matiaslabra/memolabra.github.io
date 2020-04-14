import styled from 'styled-components';
import Section from './Section';
import {media} from '../../utils/styleUtils'

const RightSection = styled(Section)`
  flex-direction: column;
  padding: 8rem;
  padding-top: 4rem;
  flex: 1 1 auto;
  ${'' /* overflow-y: auto; */}

  ${media.tablet`
    padding: 4rem;
  `}
  
  ${media.phablet`
    ${'' /* overflow-y: unset; */}
    position: static;
    height: auto;
    width: 100%;
  `}

`;

export default RightSection;
