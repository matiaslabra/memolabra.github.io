import styled from "styled-components";

const Logo = styled.div`
  font-weight: 600;
  font-size: 1em;
  margin: auto 0;

  animation: Fade 0.5s ease-out;
  opacity: 1;

  @keyframes Fade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    order: 0;
  }
`;

export default Logo;
