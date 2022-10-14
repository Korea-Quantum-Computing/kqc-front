import React from "react";
import { Content } from './AboutusDetailElements';


const TabContent = ({id, activeTab, children}) => {
  console.log('id = ', id, ' activeTab = ', activeTab)
 return (
   activeTab === id ? <Content className="TabContent">
     { children }
   </Content>
   : null
 );
};
 
export default TabContent;