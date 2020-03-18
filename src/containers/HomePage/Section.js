import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const Section = styled.section`
  position: relative;
  padding: 8rem;
  flex: 1;

  ${media.phone`
    flex-direction: row;
    flex: 1;
    padding: 0 2rem ;
  `}
`;

export default Section;
