import { useState } from 'react';
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Advisory from './Advisory';
import AboutUs from './AboutUs';

import { Tab, Nav } from './AboutusDetailElements';


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    return (
      <>
       <Tab>
          <Nav>
            <TabNavItem title="About us" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Advisory" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
          </Nav>
  
          <div className="outlet" style = {{minHeight: '500px'}}>
            <TabContent id="tab1" activeTab={activeTab}>
              <AboutUs/>
            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
              <Advisory/>
            </TabContent>
          </div>
      </Tab>
      </>
    );
  };
   
export default Tabs;