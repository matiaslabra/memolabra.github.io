import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const Section = styled.section`
  display: flex; 
  flex: 1;
  height: 100vh;
  padding: 8rem 10rem;

  ${media.phablet`
    padding: 4rem 5rem;
  `};   

`;

export default Section;
