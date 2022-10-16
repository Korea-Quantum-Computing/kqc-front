import React from 'react';
// import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FaYoutube, } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkR,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
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
                {/* <FooterLinkTitle>Menu</FooterLinkTitle>
                <FooterLinkS to = "services">Services</FooterLinkS>
                <FooterLinkR to = "research">Research</FooterLinkR>
                <FooterLinkS to = "resources">Resources</FooterLinkS>
                <FooterLinkS to = "aboutus">About Us</FooterLinkS>
                <FooterLinkR to = "/contact">Contact</FooterLinkR> */}
                {/* <FooterLink to = "/signin">Terms of Services</FooterLink> */}
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle style = {{fontFamily: 'Audiowide', fontWeight: 'bold'}}>About Us</FooterLinkTitle>
                {/* <FooterLinkR to = "../membership">Become a member</FooterLinkR> */}
                {/* <FooterLinkR to = "../team">Team</FooterLinkR> */}
                <FooterLinkR style = {{paddingLeft: '10px'}} to = "../careers">Careers</FooterLinkR>
                {/* <FooterLinkR to = "../terms">Terms of Services</FooterLinkR> */}
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle style = {{fontFamily: 'Audiowide', fontWeight: 'bold'}}>Social Media</FooterLinkTitle>
                {/* <FooterLinkR to = "/">Instagram</FooterLinkR> */}
                {/* <FooterLinkR to = "/">Facebook</FooterLinkR> */}
                <div style = {{display: 'flex', paddingLeft: '10px', margin: '0px', flexDirection: 'row', alignItems: 'center'}}>
                  <div style = {{color: '#fff', textDecoration: 'none', marginRight: '10px', fontSize: '14px'}}>
                    Youtube
                  </div>
                  <SocialIconLink 
                    style = {{marginTop: '-5px'}}
                    href = "https://www.youtube.com/channel/UCH6L4UwG60XUR0fwnvS6ovA" 
                    target = "_blank" 
                    aria-label = "Youtube"
                  >
                    <FaYoutube />
                  </SocialIconLink>
                </div>
                
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>


          <SocialMedia>
            <SocialMediaWrap>

              <WebsiteRights>
                Korea Quantum Computing  © {new Date().getFullYear()} All rights reserved. 
              </WebsiteRights>
{/* 
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
              </div> */}
              
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>

  )
}

export default Footer;