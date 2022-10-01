import React, { useState, useEffect } from "react";

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  })

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav = {scrollNav}>
        <NavbarContainer>
          <NavLogo to = '/' onClick = { toggleHome }>KQC</NavLogo>
          <MobileIcon onClick = {toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to = "services"
                smooth = { true} 
                duration = {500} 
                spy = {true} 
                exact = 'true' 
                offset = {-80}
                activeClass = 'active'
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to = "research"
                smooth = { true} 
                duration = {500} 
                spy = {true} 
                exact = 'true' 
                offset = {-80}
                activeClass = 'active'
              >
                Research
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to = "resources"
                smooth = { true} 
                duration = {500} 
                spy = {true} 
                exact = 'true' 
                offset = {-80}
                activeClass = 'active'
              >
                Resources
            </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to = "aboutus"
                smooth = { true} 
                duration = {500} 
                spy = {true} 
                exact = 'true' 
                offset = {-80}
                activeClass = 'active'
              >
                About us
              </NavLinks>
            </NavItem>
    
          </NavMenu>
          <NavBtn>
            <NavBtnLink to = "/contactus">Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;