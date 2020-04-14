import React, { forwardRef } from "react";
import styled from "styled-components";

const Top = styled.div`
  height: 100%;
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
const IntroOverlay = forwardRef((props, ref) => (
  <>
    <Top ref={ref}>
      <Top>
        <OverlayTop />
      </Top>
    </Top>
  </>
));

export default IntroOverlay;
