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
            <SidebarLink to = "aboutus" onClick = {toggle}>About Us</SidebarLink>
            <SidebarLink to = "services" onClick = {toggle}>Services</SidebarLink>
            <SidebarLink to = "members" onClick = {toggle}>Members</SidebarLink>
            <SidebarLink to = "news" onClick = {toggle}>News</SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute to = "/contactus">Contact Us</SidebarRoute>
          </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;