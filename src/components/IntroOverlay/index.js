import React from "react";
import styled from 'styled-components';

const Top = styled.div`
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: 8;
  left: 0;
`;

const OverlayTop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: black;
  bottom: 0;
  left: 0;
  right: 0;
  }
`;
const IntroOverlay = () => {
  return (
    <>
      <Top className='intro-overlay'>
        <Top className='top'>
          <OverlayTop className='overlay-top'/>
          {/* <OverlayTop className='overlay-top'/>
          <OverlayTop className='overlay-top'/> */}
        </Top>
        {/* <div className='bottom'>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
        </div> */}
      </Top>
    </>
  );
};

export default IntroOverlay;