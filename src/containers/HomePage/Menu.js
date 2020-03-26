import styled from 'styled-components';
import {media} from '../../utils/styleUtils';

const Menu = styled.nav`
  display: block;
  margin-top: 5rem;

  ${media.tablet`
    display: none;
  `}

`;

export default Menu;
