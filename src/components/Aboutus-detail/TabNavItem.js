import React from "react";
import { NavLi } from './AboutusDetailElements';

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
  <div style = {{width: '100%'}}>
     <NavLi onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title }
   </NavLi>
  </div>

 );
};
export default TabNavItem;