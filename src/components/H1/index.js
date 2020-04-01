import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const H1 = styled.h1`
  font-size: 4.15em;
  line-height: 1;
  margin: 0;

  ${media.tablet`
    font-size: 4.1em;
  `}

  ${media.phone`
    font-size: 2.9em;
  `}
`;

export default H1;
