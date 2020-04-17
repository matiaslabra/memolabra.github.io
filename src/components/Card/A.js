import styled from 'styled-components';
import { media } from '../../utils/styleUtils';

const A = styled.a`
  flex: 1 0 45%;
  display: block;
  color: #000;
  margin: 1rem 1rem;
  padding: 2.5rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border: 2px solid #000;
  cursor: ${(props) => (props.href === '#' ? 'default' : 'pointer')};
  // Scale the item and reset the opacity (previously set to 0.5 by List component )
  &:hover {
    ${'' /* sorry mom */}
    opacity: 1 !important;
    box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.75);
    transition: all 0.2s ease-in;
  }

  ${media.tablet`
    
    transition: none;
  
    &:hover{
      transform: none;
      box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.75);
    }

    &:first-child{

    }
  `}

  ${media.phablet`
    flex: 1 0 100%;
  `}
`;

export default A;
