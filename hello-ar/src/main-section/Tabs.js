import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {tabTitleList,tabPanelList} from "./tabslist"
import SettingsMain from './setting/SettingsMain';
import "./tabs.css"
export default function TabsSection() {
  return (
    <div className="tabs_main">

      <Tabs className={"react-tabs_tabs"}>
        <TabList>
          {tabTitleList.map((item,index)=> {
              return <Tab>
                  <div>
                      {item.title}
                  </div>
              </Tab>
          })}
        </TabList>
          {tabPanelList.map((item,index)=> {
              return ( <TabPanel>
              <div className="panel-content">
                <h2>{item.title}</h2>
              </div>
            </TabPanel> )
          })}
        <TabPanel>
              <div className="panel-content">
                <SettingsMain />
              </div>
            </TabPanel>
      </Tabs>
    </div>
  )
}
