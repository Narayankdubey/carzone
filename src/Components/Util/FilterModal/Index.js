import React from "react";
import { Modal, Button, Tab, Nav, Row, Col, Form } from "react-bootstrap";

import { getBrandName } from "../../../StaticData";

const FilterModal = ({ showFilterModal, matches, handleFilterModalClose }) => {
  const brands = getBrandName();

  return (
    <Modal
      show={showFilterModal}
      fullscreen={matches}
      onHide={handleFilterModalClose}
      style={{ height: "100%" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Filter</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ overflowY: "auto", height: "calc(100vh - 200px)" }}>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          style={{ height: "100%" }}
        >
          <Row style={{ height: "100%", flexWrap: "nowrap" }}>
            <Col sm={3} style={{ width: "35%", maxWidth: "200px" }}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Brands</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Models</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} style={{ height: "100%", width: "65%" }}>
              <Tab.Content style={{ height: "100%", width: "100%" }}>
                <Tab.Pane
                  eventKey="first"
                  style={{ overflowY: "auto", height: "100%", width: "100%" }}
                >
                  {brands.map((data, index) => (
                    <div key={index} className="mb-3">
                      <Form.Check type={"checkbox"} id={data} label={data} />
                    </div>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione dolorum itaque odit nobis praesentium delectus
                    dolores ad distinctio doloremque? Suscipit consectetur
                    laudantium vitae, enim laboriosam iusto! Quasi, provident
                    ab, dicta aut rem in expedita nulla architecto vel qui
                    dolores nostrum omnis, culpa nemo repellendus placeat
                    aliquam optio voluptatem excepturi? Fuga, sapiente ipsum?
                    Praesentium veniam cum expedita ab placeat sint incidunt ut
                    ducimus neque voluptatibus eaque recusandae voluptates
                    aspernatur, commodi labore vel vitae, quasi explicabo eos
                    quod omnis dolor? Lorem500
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Modal.Body>
      <Modal.Footer
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>0 Product Filtered</p>
        <Button variant="primary" onClick={handleFilterModalClose}>
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
