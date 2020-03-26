import styled from 'styled-components';
import Section from './Section';
import {media} from '../../utils/styleUtils'

const LeftSection = styled(Section)`
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 476px;
  padding: 8rem 0rem 8rem 8rem;

  ${media.tablet`
    position: static;
    padding: 4rem 3rem;
    height: auto;
    width: 100%;
  `}
`;

export default LeftSection;
