import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import Sell from "../Sell/Index";

const Home = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="buy"
        id="uncontrolled-tab-example"
        className="mb-3 nav-justified"
      >
        <Tab eventKey="buy" title="Buy">
          <h1>Buy here</h1>
        </Tab>
        <Tab eventKey="sell" title="Sell">
          <Sell />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Home;
