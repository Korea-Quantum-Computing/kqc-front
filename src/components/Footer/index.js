import React from 'react';
// import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FaYoutube, } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  AddressWrapper,
  SmallBlank,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkR,
  // SocialMedia,
  // SocialMediaWrap,
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
              <AddressWrapper>
                <SocialLogo to="/">
                  KQC
                </SocialLogo>
                <p style = {{color: '#fff', fontSize: '14px', marginBottom: '-2px'}} >Address:</p>
                <p style = {{color: '#fff', fontSize: '14px', marginBottom: '-2px'}} >55 Centumjungang-ro, Haeundae</p>
                <p style = {{color: '#fff', fontSize: '14px', marginBottom: '-2px'}} >Busan, 48058</p>
                <p style = {{color: '#fff', fontSize: '14px', marginBottom: '-2px'}} >info@kqchub.com</p>
                
              </AddressWrapper>
            </FooterLinksWrapper>

            <SmallBlank>
              <FooterLinksWrapper>
                <FooterLinkItems>
                </FooterLinkItems>
              </FooterLinksWrapper>
            </SmallBlank>
            

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle style = {{fontFamily: 'Audiowide', fontWeight: 'bold'}}>About Us</FooterLinkTitle>
                <FooterLinkR style = {{paddingLeft: '10px'}} to = "../careers">Careers</FooterLinkR>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle style = {{fontFamily: 'Audiowide', fontWeight: 'bold'}}>Social Media</FooterLinkTitle>
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
          <WebsiteRights>
                  Korea Quantum Computing  © {new Date().getFullYear()} All rights reserved. 
          </WebsiteRights>
        </FooterWrap>
        
      </FooterContainer>
    </>

  )
}

export default Footer;