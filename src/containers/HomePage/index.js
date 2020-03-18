import React from 'react'
import H1 from '../../components/H1'
import styled from 'styled-components';
import {media} from '../../utils/styleUtils'

import List from '../List';

import projects from '../../data/projects'

// const Grid = styled.div`
// `; 
console.log(projects);
const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  ${media.phone`
    flex-direction: column;
  `}
  
`; 

const Col = styled.div`
  position: relative;
  padding: 8rem;
  flex: 1;
  ${props => props.right && `
    right: 0;
    position: absolute;
    width: 768px;
  `}

  ${props => props.left && `
    position: fixed;
  `}

  
  ${media.phone`
    flex-direction: row;
    flex: 1;
    padding: 0 2rem ;
  `}
`;

const A = styled.a`
  color: #000;

  &:hover {
    color: #000;
  }
`;

const Title = styled.div`
  display:flex;
  flex-direction: column;
  max-width: 400px;
  margin-right: auto;
`;

export default function HomePage(){
  return(
    <MainRow>
      <Col left>
        <Title>
          <H1>Hello, I'm Matías Labra.</H1>
          <p>I am a Software Engineer living in Brisbane, Australia.
            I love coding <A href="https://reactjs.org/">React.js</A>, solving problems and staying out my comfort zone. 
            It always amazes me how lines of code can make lives easier.
          </p>
          <div className="links">
            <div className="icon"><a href="mailto:gmlabra@gmail.com"><i className="ion-email "></i></a></div>
            <div className="icon"><a href="https://www.linkedin.com/in/matias-labra-a2bb4a172/"><i className="ion-social-linkedin-outline icon"></i>LinkedIn</a></div>
            <div className="icon"><a href="https://github.com/matiaslabra"><i className="ion-social-github icon"></i>GitHub</a></div>
          </div>
        </Title>
      </Col>
      <Col right>
        <List items= {projects}/>
      </Col>
    </MainRow>
  );
}