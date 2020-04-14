import styled from 'styled-components';
import A from '../Card/A';
import { media } from '../../utils/styleUtils';

const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -1rem;
  margin-right: -1rem;

  // Changes all items opacity when List section gets hover so the main (under the cursor ) List > Card gets attention
  &:hover > ${A} {
    opacity: 0.5;
  }
  ${media.tablet`
    flex-direction:column;
    &:hover > ${A}{
      opacity: 1;
    }
  `}
`;

export default ListWrapper;
