import React from 'react';

import NavBar from './NavBar';
import Logo from './Logo';
import FlexContainer from './FlexContainer';
// import HeaderLink from "./HeaderLink";
// import Toggle from "./Toggle";
// import ToggleWrap from "./ToggleWrap";
// import Menu from "./Menu";
// import MobileMenu from "./MobileMenu";

function Header({ triggerLogo, open, setOpen }) {
  return (
    <NavBar>
      {/* logo */}
      <FlexContainer>
        {triggerLogo ? <Logo>Matías Labra</Logo> : <p>M.L</p>}
        {/*
        <Menu>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/admin">Assignment</HeaderLink>
        </Menu>
        {open && (
          <MobileMenu>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/admin">Assignment</HeaderLink>
          </MobileMenu>
        )}
         <ToggleWrap>
          <Toggle open={open} onClick={() => setOpen(!open)} />
        </ToggleWrap> */}
      </FlexContainer>
    </NavBar>
  );
}

export default Header;
