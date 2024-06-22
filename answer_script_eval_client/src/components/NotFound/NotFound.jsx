import React from "react";

import { Typography, Divider } from 'antd';
const { Title } = Typography;

import "./NotFound.css";


function NotFound() {
  return (
    <div className="wrapper row2">
      <div id="container" className="clear">
        <section id="fof" className="clear">
            
          <div className="hgroup">
            <Title level={3}>Something Just Went Wrong</Title>
            <Divider><Title level={4}>404 Error</Title></Divider>
              
          </div>
          <p>For Some Reason The Page You Requested Could Not Be Found On Our Server</p>
          {/* <Link to="/">Home</Link> */}
            
        </section>
          
      </div>
    </div>
  );
}
  
export default NotFound;


