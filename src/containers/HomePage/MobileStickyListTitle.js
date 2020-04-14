
import styled from 'styled-components';
import H3 from '../../components/H3';
import {media} from '../../utils/styleUtils'

const MobileStickyListTitle = styled(H3)`
  display: block;
  margin: 0px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;

  ${media.phablet`
    display: block;
    ${'' /* position: sticky; */}
    padding: 1.25em 0;
    ${'' /* top: 0; */}
    font-size: 1em;
    z-index:3;
  `}
  

`;

export default MobileStickyListTitle;



  