import React from 'react'

// Data
import projects from '../../data/projects';

//Components
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import A from '../../components/A';
import StyledH1 from './StyledH1'
import List from '../../components/List';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import LinkContainer from './LinkContainer';
import LinkBox from './LinkBox';
import Title from './Title';
import SubTitle from './SubTitle';
import Ul from './Ul';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MainRow from './MainRow';



export default function HomePage(){
  return(
    <MainRow>
      <LeftSection>
        <Title>
          <StyledH1>Hello, I'm Matías Labra.</StyledH1>
          <SubTitle>
            <p>I am a Software Engineer currently looking for a web developer 
              position in Brisbane, Australia. From exposing new endpoints to creating 
              a new <A target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React.js</A> component,
               I would love a role where I can contribute to the team solving problems, advance my skills as a developer and 
              learn cutting edge technologies.
            </p>
          </SubTitle>
        </Title>
        <Menu>
          <Ul>
            <MenuItem active>Experience</MenuItem>
            <MenuItem deactivate>Skills</MenuItem>
            <MenuItem deactivate>Hobbies</MenuItem>
          </Ul>
        </Menu>
        <LinkContainer>
          <LinkBox target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matias-labra-a2bb4a172/">
            <FaLinkedin/>
              LinkedIn
            </LinkBox>
          <LinkBox target="_blank" rel="noopener noreferrer" href="https://github.com/matiaslabra">
            <FaGithub/>
            GitHub
          </LinkBox>
        </LinkContainer>
      </LeftSection>
      <RightSection>
        <List items= {projects}/>
      </RightSection>
    </MainRow>
  );
}