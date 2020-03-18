import styled from 'styled-components';
import A from '../../components/Card/A';

const ListWrapper = styled.ul`
  list-style: unset;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;

  // Changes all items opacity when List section gets hover so the main (under the cursor ) List > Card gets attention
  &:hover > ${A}{
    opacity: 0.5;
  }
`;

export default ListWrapper;
