import styled from 'styled-components';

const LinkBox = styled.a`
  text-align:center;
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-weight: 300;

  & > svg{
    display: inline-block;
    font-size:3rem;
    vertical-align: middle;
    margin-right: 1rem;
  }
`;

export default LinkBox;