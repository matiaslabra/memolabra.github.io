import React from 'react'
import H1 from '../../components/H1'
import styled from 'styled-components';
import {media} from '../../utils/styleUtils'
// Data
import projects from '../../data/projects'

//Components
import List from '../List';
import RightSection from './RightSection';
import LeftSection from './LeftSection';


console.log(projects);
const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  ${media.phone`
    flex-direction: column;
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
      <LeftSection>
        <Title>
          <H1>Hello, I'm Matías Labra.</H1>
          <p>I am a Software Engineer living in Brisbane, Australia.
            I love coding <A href="https://reactjs.org/">React.js</A>, solving problems and staying out my comfort zone. 
            It always amazes me how lines of code can make lives easier.
          </p>
          <div className="links">
            <div className="icon"><a target="_blank" rel="noopener noreferrer" href="mailto:gmlabra@gmail.com"><i className="ion-email "></i></a></div>
            <div className="icon"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matias-labra-a2bb4a172/"><i className="ion-social-linkedin-outline icon"></i>LinkedIn</a></div>
            <div className="icon"><a target="_blank" rel="noopener noreferrer" href="https://github.com/matiaslabra"><i className="ion-social-github icon"></i>GitHub</a></div>
          </div>
        </Title>
      </LeftSection>
      <RightSection>
        <List items= {projects}/>
      </RightSection>
    </MainRow>
  );
}