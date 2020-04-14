import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const LinkContainer = styled.div`
  display:flex;
  margin-top: 4rem;

  ${media.tablet`
    margin-top: 4rem;
  `}
`;

export default LinkContainer;