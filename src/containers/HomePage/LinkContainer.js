import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const LinkContainer = styled.div`
  display:flex;
  margin-top: auto;
  justify-content: space-evenly;

  ${media.tablet`
    margin-top: 5rem;
  `}
`;

export default LinkContainer;