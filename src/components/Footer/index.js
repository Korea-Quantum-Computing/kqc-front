import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';


const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
            <div style ={{display: 'flex', flexDirection: 'column', width: '400px'}}>
                <SocialLogo to="/">
                  KQC
                </SocialLogo>
                <p style = {{color: '#fff', fontSize: '14px', marginBottom: '-2px'}} >Address:</p>
                <p style = {{color: '#fff', fontSize: '14px', marginBottom: '-2px'}} >55 Centumjungang-ro, Haeundae</p>
                <p style = {{color: '#fff', fontSize: '14px', marginBottom: '-2px'}} >Busan, 48058</p>
                <p style = {{color: '#fff', fontSize: '14px', marginBottom: '-2px'}} >info@kqchub.com</p>
              </div>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Menu</FooterLinkTitle>
                <FooterLink to = "/services">Services</FooterLink>
                <FooterLink to = "research">Research</FooterLink>
                <FooterLink to = "/resources">Resources</FooterLink>
                <FooterLink to = "/aboutus">About Us</FooterLink>
                <FooterLink to = "/contact">Contact</FooterLink>
                {/* <FooterLink to = "/signin">Terms of Services</FooterLink> */}
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to = "/contactus">Become a member</FooterLink>
                <FooterLink to = "/signin">Team</FooterLink>
                <FooterLink to = "/signin">Careers</FooterLink>
                <FooterLink to = "/signin">Terms of Services</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to = "/">Instagram</FooterLink>
                <FooterLink to = "/">Facebook</FooterLink>
                <FooterLink to = "/">Youtube</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>


          <SocialMedia>
            <SocialMediaWrap>

              <WebsiteRights>
                Korea Quantum Computing  © {new Date().getFullYear()} All rights reserved. 
              </WebsiteRights>

              <div style = {{marginTop: '-10px'}}>
              <SocialIcons>

                <SocialIconLink 
                  href = "/" 
                  target = "_blank" 
                  aria-label = "Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>

                <SocialIconLink
                  href = "www.instagram.com" 
                  target = "_blank" 
                  aria-label = "Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>

                <SocialIconLink 
                  href = "/" 
                  target = "_blank" 
                  aria-label = "Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>

                <SocialIconLink 
                  href = "/" 
                  target = "_blank" 
                  aria-label = "Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>

                </SocialIcons>
              </div>
              
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>

  )
}

export default Footer;