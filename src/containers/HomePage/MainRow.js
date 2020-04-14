import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const MainRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  overflow-y: unset;

  ${media.giant`
    width: 1440px;
  `}
  
  ${media.desktop`
    width: 100%;
  `}
  
  ${media.phablet`
    flex-direction: column;
  `}
  
`; 

export default MainRow;