import React from "react";
import { Card, Button, Form, FormControl } from "react-bootstrap";
import { SortAlphaDown, Funnel } from "react-bootstrap-icons";

import "./style.css";

const Buy = () => {
  return (
    <div
      className="sell-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="search-filter-container">
        <Form className="d-flex search-container" >
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <div className="sort-filter-container">
          <Form.Select aria-label="Default select example">
            <option>Sort By</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example">
            <option>Filter</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>
      <div
        className="sell-product-container"
        style={{
          padding: 10,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/1f490af7-99bd-4d79-b26c-10648fa4985c/83d69025-a495-4468-85a3-6b2db41d1e61/43.jpg?w=794&auto=format"
          />
          <Card.Body>
            <Card.Title>2014 Mahindra Thar CRDE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr />
            <div
              className="product-button-price-container"
              style={{
                width: "100%",
                //   padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>5,00,000 /-</h5>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div
        className="filter-sort-container"
        style={{
          width: "100%",
          height: "50px",
          padding: "5px",
          position: "sticky",
          bottom: 0,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "orange",
          color: "white",
        }}
      >
        <SortAlphaDown />
        <Funnel />
      </div>
    </div>
  );
};

export default Buy;
