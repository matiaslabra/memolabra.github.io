import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const Section = styled.section`
  position: relative;
  padding: 8rem;
  flex: 1;
  // height: 100vh;

  ${media.desktop`
    padding: 4rem 3rem;
  `};   

`;

export default Section;
