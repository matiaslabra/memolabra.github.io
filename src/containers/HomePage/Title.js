import styled from "styled-components";
import H1 from "../../components/H1";
// import {media} from '../../utils/styleUtils'

const Title = styled(H1)`
  font-weight: 700;
  z-index: 10;
  color: white;
  mix-blend-mode: difference;
  margin-left: -5px;

  ${(props) =>
    props.animationComplete &&
    `
    mix-blend-mode: normal;
    color: black;
  `}}
}
`;

export default Title;
