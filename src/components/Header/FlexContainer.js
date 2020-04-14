import styled from "styled-components";
import { media } from "../../utils/styleUtils";

const FlexContainer = styled.div`
  display: flex;
  margin: 0 8rem;
  justify-content: space-between;
  height: 5.6rem;

  ${media.tablet`
    margin: 0 4rem;
  `}
`;

export default FlexContainer;
