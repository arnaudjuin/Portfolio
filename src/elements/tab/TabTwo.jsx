import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">User experience design <span> - UI/UX</span></a>
                                                    Delight the user and make it work.
                                                </li>
                                                <li>
                                                    <a href="/service">Web and user interface design<span> - Development</span></a>
                                                    Websites, web experiences, ...
                                                </li>
                                                <li>
                                                    <a href="/service">Product management <span> - Processes </span></a>
                                                    Create the best value out of your product.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Machine Learning Course <span> Coursera </span></a> 2020
                                               </li>
                                               <li>
                                                   <a href="/service">Adobe Design Jam <span> Proto of the week </span></a> 2018
                                               </li>

                                           </ul>
                                       </div>
                                    </TabPanel>
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service"> Co-Founder <span> Lapin </span></a> 2019 - Current
                                               </li>
                                               <li>
                                                   <a href="/service"> Product owner <span> Coinhouse</span></a> 2019
                                               </li>
                                               <li>
                                                   <a href="/service"> Developer IoT <span> Beepings </span></a> 2018
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">MS Engineering, IoT<span> ECE Paris, France </span></a> 2014-2019
                                               </li>
                                               <li>
                                                   <a href="/service">NTUST<span> Taipei, Taiwan </span></a> 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Stellenbosch University<span> Stellenbosch, South Africa</span></a> 2016
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;
