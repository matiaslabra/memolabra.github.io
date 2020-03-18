import styled from 'styled-components';

const A = styled.a`
  display: block;
  color: #fff;
  background: #202022;
  margin: 0.75rem 0;
  padding: 2.5rem;
  text-decoration: none;
  transition: all .2s ease-in-out;
  border: 0 solid #e2e8f0;

  // Scale the item and reset the opacity (previously set to 0.5 by List component )
  &:hover{
    opacity: 1 !important; //sorry mom
    transform: scale(1.1);
    transition: all .2s ease-in;
  }


`;

export default A;
