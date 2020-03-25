import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  ${media.phone`
    flex-direction: column;
  `}
  
`; 

export default MainRow;