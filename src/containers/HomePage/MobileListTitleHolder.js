import styled from 'styled-components';
import { media } from '../../utils/styleUtils';

const MobileListTitleHolder = styled.div`
  ${({ active }) =>
    active &&
    media.phablet`
    display: block;
    width: 100%;
    position: fixed;
    height: 3.5em;
    z-index:2;
    background: #fff;
    box-shadow: 0 4px 2px -2px gray;
    transform: translateY(-64px);
    transition: all .2s ease-out;

    transform: translateY(0);
    transition: all .2s ease-in-out;
    width: 100%;
  `}
`;

export default MobileListTitleHolder;
