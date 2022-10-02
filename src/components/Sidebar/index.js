import React from "react";
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SidebarBtnWrap, 
  SidebarRoute } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return(
    <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
      <Icon onClick = {toggle}>
          <CloseIcon />
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to = "services" onClick = {toggle}>Services</SidebarLink>
            <SidebarLink to = "research" onClick = {toggle}>Research</SidebarLink>
            <SidebarLink to = "resources" onClick = {toggle}>Resources</SidebarLink>
            <SidebarLink to = "aboutus" onClick = {toggle}>About Us</SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute to = "/contactus">Contact Us</SidebarRoute>
          </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;