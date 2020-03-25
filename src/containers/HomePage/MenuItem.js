import styled from 'styled-components';

const MenuItem = styled.li`
  display: inline-block;
  width: 6em;
  align-self: center;
  text-align: center;
  list-style: unset;
  font-weight: 500;
  color: #000;
  border-bottom: 1px solid #000;
  margin-top: 15px;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all .2s ease-in-out;

  
  ${({ deactivate }) => !deactivate && `
    &:hover{
      transition: all .2s ease-in;
      font-weight: bold;
      border-bottom: 2px solid #000;
      width: 50%
    }
  `};
  
  ${({ active }) => active && `
    font-weight: bold;
    color: #000;
    border-bottom: 2px solid #000;
    width: 50%
  `}
  
  ${({ deactivate }) => deactivate && `
    font-weight: 300;
    color: #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
  `}
  
`;

export default MenuItem;
