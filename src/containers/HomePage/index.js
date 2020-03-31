import React, { useRef } from 'react'

// Data
import projects from '../../data/projects';

//Components
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import A from '../../components/A';
import MobileStickyListTitle from './MobileStickyListTitle';
import MobileListTitleHolder from './MobileListTitleHolder';
import StyledH1 from './StyledH1'
import List from '../../components/List';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import LinkContainer from './LinkContainer';
import LinkBox from './LinkBox';
import Title from './Title';
import SubTitle from './SubTitle';
import Ul from './Ul';
import Menu from '../../components/Menu/Menu';
import MenuItem from '../../components/MenuItem/MenuItem';
import MainRow from './MainRow';

//hooks

import useScrollSpy from 'react-use-scrollspy';

export default function HomePage(){
  
  const sectionRefs = [useRef(null), useRef(null)];
  const activeSection = useScrollSpy({
    offsetPx : 40,
    sectionElementRefs : sectionRefs, // Array of References to DOM elements
  });

  const scrollToSection = sectionKey => e => {
    e.preventDefault(); //prevent url updating and jump to section
    let elem = sectionRefs[sectionKey];
    elem.current.scrollIntoView({
      behavior: 'smooth', // smooth scroll
      block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
    })
  };

  return(
    <MainRow>
      <MobileListTitleHolder active = {activeSection === 1 ? true :false}/>
      <LeftSection ref={sectionRefs[0]}>
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
            <MenuItem href="#projects" active = {activeSection === 0 ? true : false} onClick={(e) => scrollToSection(0)(e)} > -Experience</MenuItem>
            <MenuItem href="#skills"  active = {activeSection === 1 ? true : false} onClick={(e) => scrollToSection(1)(e)} > - Skills</MenuItem>
            <MenuItem deactivate>Hobbies</MenuItem>
          </Ul>
        </Menu>
        <LinkContainer >
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
      <RightSection ref={sectionRefs[1]}>
        <div id="projects"  >
          <MobileStickyListTitle>Experience</MobileStickyListTitle>
          <List items={projects}/>
        </div>
      </RightSection>
    </MainRow>
  );
}