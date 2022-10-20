import React, { useState, useEffect } from "react";

import { Nav, NavbarContainer, NavLogo, Logo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, LanguageButton } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false)
  const [english, setEnglish] = useState(true)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  const {  i18n } = useTranslation();
  
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    i18n.changeLanguage(english=== true ? 'en' : 'ko');
  }, [english])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  

  const changeLanguage = () => {
    setEnglish(!english);
    
  };

  console.log('english = ', english)
  return (
    <>
      <Nav scrollNav = {scrollNav}>
        <NavbarContainer>
          <NavLogo to = '/' onClick = { toggleHome }><Logo src = {require('../../images/kqc-logo.svg').default}/> KQC</NavLogo>
          <MobileIcon onClick = {toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
          <NavItem>
              <NavLinks 
                to = "aboutus"
                smooth = { true} 
                duration = {200} 
                spy = {true} 
                exact = 'true' 
                offset = {-80}
                activeClass = 'active'
              >
                About us
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks 
                to = "services"
                smooth = { true} 
                duration = {200} 
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
                to = "members"
                smooth = { true} 
                duration = {200} 
                spy = {true} 
                exact = 'true' 
                offset = {-80}
                activeClass = 'active'
              >
              Members
            </NavLinks>
            </NavItem>
            
    
            <NavItem>
              <NavLinks 
                to = "news"
                smooth = { true} 
                duration = {200} 
                spy = {true} 
                exact = 'true' 
                offset = {-80}
                activeClass = 'active'
              >
              News
            </NavLinks>
            </NavItem>
            
            <div>
          <div>
            
          </div>

      </div>
          </NavMenu>
          <div style ={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
            {/* <NavBtn>
              <LanguageButton onClick={() => changeLanguage("ko")}>
                <img 
                  style = {{height: '25px', width: '25px'}} 
                  src = {require(english === true ? `../../images/united-states.png`: `../../images/south-korea.png`)}/>
              </LanguageButton>
            </NavBtn> */}

            <NavBtn>
              <NavBtnLink to = "/contactus">Contact</NavBtnLink>
            </NavBtn>
          </div>
          
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;