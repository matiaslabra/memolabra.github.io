
import styled from 'styled-components';
import H1 from '../../components/H1';
import {media} from '../../utils/styleUtils'

const StyledH1 = styled(H1)`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 97%;
  transition: background-size 0.25s ease-in;

  ${media.tablet`
    background-image: none;
  `}

  ${media.phablet`
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    font-size: 5em;
  `}
  
  ${media.phone`
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    font-size: 3.2em;
  `}

`;

export default StyledH1;



  