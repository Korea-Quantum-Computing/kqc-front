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
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to = "/signin">How it works</FooterLink>
                <FooterLink to = "/signin">Testimonials</FooterLink>
                <FooterLink to = "/signin">Careers</FooterLink>
                <FooterLink to = "/signin">Investors</FooterLink>
                <FooterLink to = "/signin">Terms of Services</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to = "/signin">How it works</FooterLink>
                <FooterLink to = "/signin">Testimonials</FooterLink>
                <FooterLink to = "/signin">Careers</FooterLink>
                <FooterLink to = "/signin">Investors</FooterLink>
                <FooterLink to = "/signin">Terms of Services</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to = "/signin">How it works</FooterLink>
                <FooterLink to = "/signin">Testimonials</FooterLink>
                <FooterLink to = "/signin">Careers</FooterLink>
                <FooterLink to = "/signin">Investors</FooterLink>
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

              <SocialLogo to="/">
                KQC
              </SocialLogo>

              <WebsiteRights>
                Korea Quantum Computing  © {new Date().getFullYear()} All rights reserved. 
              </WebsiteRights>


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
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>

  )
}

export default Footer;