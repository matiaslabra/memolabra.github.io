import styled from 'styled-components';
import Section from './Section';
import {media} from '../../utils/styleUtils'

const LeftSection = styled(Section)`
  flex-direction: column;
  flex: 0 0 480px;
  padding: 8rem 0rem 8rem 8rem;
  background-color: white;
  width: 480px;

  ${media.tablet`
    padding: 4rem 0rem 4rem 4rem;
    flex: 1 0 430px;

  `}
  ${media.phablet`
    padding: 4rem 5rem;
    height: auto; //fallback
    flex: 1 0 auto; // auto height
    position: static;
    width: 100%;
  `}
`;

export default LeftSection;
