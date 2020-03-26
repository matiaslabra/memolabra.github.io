import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    flex-direction: column;
  `}
  
`; 

export default MainRow;