import React from "react";
import { Tabs, Tab } from "react-bootstrap";

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
          <h1>Sell here</h1>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Home;
