import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex: 1 0 ${(props) => props.basis};
  flex-direction: column;
  align-items: stretch;
  padding: ${(props) => (props.padding ? props.padding : '0')};
  & > img {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    height: 100%;
  }

  & > p {
    font-size: 1.25rem;
  }
`;

export default Box;
