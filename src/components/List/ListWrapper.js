import styled from 'styled-components';
import LinkContainer from '../Card/LinkContainer';

const ListWrapper = styled.ul`
  width: 100%;
  list-style: unset;
  list-style-type: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;

  // Changes all items opacity when List section gets hover so the main (under the cursor ) List > Card gets attention
  &:hover > ${LinkContainer}{
    opacity: 0.5;
  }
`;

export default ListWrapper;
