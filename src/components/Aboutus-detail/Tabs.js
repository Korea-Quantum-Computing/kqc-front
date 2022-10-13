import react, { useState } from 'react';
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Advisory from './Advisory';
import History from './History';

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
  
          <div className="outlet">
            <TabContent id="tab1" activeTab={activeTab}>
              <History/>
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