
import styled from 'styled-components';
import H3 from '../../components/H3';
import {media} from '../../utils/styleUtils'

const MobileStickyListTitle = styled(H3)`
  display: none;
  margin: 0px;
  margin-bottom: 1rem;
  ${media.phablet`
    display: block;
    position: sticky;
    padding: 1.25em 0;
    top: 0;
    font-size: 1em;
    text-transform: uppercase;
    z-index:3;
  `}
  

`;

export default MobileStickyListTitle;



  