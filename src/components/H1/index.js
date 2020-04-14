import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const H1 = styled.h1`
  font-size: 6em;
  line-height: 1;
  margin: 0;

  ${media.tablet`
    font-size: 5.3em;
  `}

  ${media.phone`
    font-size: 2.9em;
  `}
`;

export default H1;
