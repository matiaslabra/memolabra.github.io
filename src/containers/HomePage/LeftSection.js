import styled from 'styled-components';
import Section from './Section';
import {media} from '../../utils/styleUtils'

const LeftSection = styled(Section)`
  flex-direction: column;
  flex: 1 0 auto;
  padding: 8rem;
  padding-right: 0rem;
  padding-bottom: 4rem;
  background-color: white;
  width: 634px;

  ${media.tablet`
    padding: 4rem 0rem 4rem 4rem;
    flex: 1 0 auto;
    width: 534px;
  `}
  ${media.phablet`
    padding: 4rem;
    height: auto; //fallback
    flex: 1 0 auto; // auto height
    position: static;
    width: 100%;
  `}
`;

export default LeftSection;
