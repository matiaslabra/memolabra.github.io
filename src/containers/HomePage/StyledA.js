import styled from 'styled-components';
import A from '../../components/A';
const LinkBox = styled(A)`
  text-align: center;
  display: inline-block;
  font-weight: 300;
  margin-right: 2rem;

  & > svg {
    display: inline-block;
    font-size: 2rem;
    vertical-align: middle;
    margin-right: 1rem;
  }
`;

export default LinkBox;
