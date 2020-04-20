import React, { useRef, useEffect, useState } from 'react';
import useScrollSpy from 'react-use-scrollspy';
//Animation
import homePageAnimation from './animation';
// Data
import projects from '../../data/projects';
import clients from '../../data/clients';

//Components
import Header from '../../components/Header';
import IntroOverlay from '../../components/IntroOverlay';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import A from '../../components/A';
import H2 from '../../components/H2';
import MobileStickyListTitle from './MobileStickyListTitle';
// import MobileListTitleHolder from "./MobileListTitleHolder";
import TitleLine from './TitleLine';
import List from '../../components/List';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import LinkContainer from './LinkContainer';
import StyledA from './StyledA';
import Title from './Title';
import SubTitle from './SubTitle';
import Card from '../../components/Card';
import ImageCard from '../../components/ImageCard';
import MainRow from './MainRow';
import Footer from './Footer';

//hooks

export default function HomePage() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const titleRef = useRef(null);
  const title2Ref = useRef(null);
  const overlayRef = useRef(null);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homePageAnimation(completeAnimation, titleRef, title2Ref, overlayRef);
  }, []);

  const sectionRefsForScroll = [useRef(null), useRef(null), useRef(null)];

  const activeSection = useScrollSpy({
    offsetPx: -16,
    sectionElementRefs: sectionRefsForScroll, // Array of References to DOM elements
  });

  // const scrollToSection = sectionKey => e => {
  //   e.preventDefault(); //prevent url updating and jump to section
  //   let elem = sectionRefsForScroll[sectionKey];
  //   elem.current.scrollIntoView({
  //     behavior: 'smooth', // smooth scroll
  //     block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
  //   })
  // };

  return (
    <>
      {animationComplete === false ? <IntroOverlay ref={overlayRef} /> : ''}
      <Header triggerLogo={activeSection >= 1 ? true : false}></Header>
      <MainRow>
        <LeftSection animationComplete={animationComplete}>
          <Title
            animationComplete={animationComplete}
            ref={sectionRefsForScroll[0]}
          >
            <TitleLine animationComplete={animationComplete}>
              <span ref={titleRef}> Hello, I'm </span>
            </TitleLine>
            <TitleLine animationComplete={animationComplete}>
              <span ref={title2Ref}> Matías Labra.</span>
            </TitleLine>
          </Title>
          <SubTitle ref={sectionRefsForScroll[1]}>
            <p>
              I am a Software Engineer currently looking for a Web Developer
              position in Brisbane, Australia. From exposing new endpoints to
              creating a new{' '}
              <A
                target="_blank"
                rel="noopener noreferrer"
                href="https://reactjs.org/"
              >
                React.js
              </A>{' '}
              component, I would love a role where I can contribute to the team
              solving problems, advance my skills as a developer and learn
              cutting edge technologies.
            </p>
          </SubTitle>
          <LinkContainer>
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/matias-labra-a2bb4a172/"
            >
              <FaLinkedin />
              LinkedIn
            </StyledA>
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/matiaslabra"
            >
              <FaGithub />
              GitHub
            </StyledA>
          </LinkContainer>
        </LeftSection>
        <RightSection
          animationComplete={animationComplete}
          ref={sectionRefsForScroll[2]}
        >
          <div id="projects">
            <H2>Recent works</H2>
            <MobileStickyListTitle>Full Stack</MobileStickyListTitle>
            <List items={projects} component={Card} />
            <MobileStickyListTitle>Front End</MobileStickyListTitle>
            <List items={clients} component={ImageCard} />
          </div>
        </RightSection>
      </MainRow>
      <Footer>
        Made with{' '}
        <span role="img" aria-label="coffee and heart emoji">
          ♥️ & ☕️
        </span>{' '}
        with{' '}
        <A
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/matiaslabra/matiaslabra.github.io"
        >
          React and Styled Components
        </A>
      </Footer>
    </>
  );
}
