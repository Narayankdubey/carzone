import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Form,
  FormControl,
  Modal,
  InputGroup,
} from "react-bootstrap";
import { SortAlphaDown, Funnel, Search } from "react-bootstrap-icons";

import "./style.css";
import FilterModal from "../../Util/FilterModal/Index";

const Buy = () => {
  const [scroll, setScroll] = useState("");
  const [scrollValue, setScrollValue] = useState(0);
  const [hideUtil, setHideUtil] = useState("");
  const [hideSortFilter, setHideSortFilter] = useState("");
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 825px)").matches
  );
  const [sortRadioValue, setSortRadioValue] = useState();

  useEffect(() => {
    window
      .matchMedia("(max-width: 825px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 130) {
        if (scrollValue > window.scrollY) {
          setHideUtil("showUtil");
        } else {
          setHideUtil("hideUtil");
        }
      }
      if (scrollValue > window.scrollY) {
        setHideSortFilter("hideSortFilter");
      } else {
        setHideSortFilter("showSortFilter");
      }
      if (window.scrollY > 100) {
        setScroll("scrollStyle");
      } else {
        setScroll("");
      }
      setScrollValue(window.scrollY);
    });
  });

  const handleFilterModal = () => {
    // alert("It will show you the modal of filter");
    setShowFilterModal(true);
  };
  const handleSortModal = () => {
    // alert("It will show you the modal of Sort");
    setShowSortModal(true);
  };

  const handleFilterModalClose = () => setShowFilterModal(false);
  const handleSortModalClose = () => setShowSortModal(false);

  const handleRadioChange = (e) => {
    setSortRadioValue(e.target.value);
  };

  return (
    <div
      className="sell-container"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FilterModal
        showFilterModal={showFilterModal}
        matches={matches}
        handleFilterModalClose={handleFilterModalClose}
      />
      <div className={`search-filter-container ${scroll} ${hideUtil}`}>
        <Form className="d-flex search-container">
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-secondary">
              <Search />
            </Button>
          </InputGroup>
        </Form>
        <div className="sort-filter-container">
          <Button variant="outline-dark" onClick={handleSortModal}>
            Sort
            <SortAlphaDown />
          </Button>
          <Button variant="outline-dark" onClick={handleFilterModal}>
            Filter <Funnel />
          </Button>
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
      <div className={`filter-sort-container-mobile ${hideSortFilter}`}>
        <div
          className="width48 below-sort-container item-center pointer"
          onClick={handleSortModal}
        >
          <SortAlphaDown />
        </div>
        <div className="below-divider"></div>
        <div
          className="width48 below-filter-container item-center pointer"
          onClick={handleFilterModal}
        >
          <Funnel />
        </div>
      </div>
      <Modal show={showSortModal} onHide={handleSortModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sort</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="sort-modal-body"> */}
          <div className="sort-element-container">
            <Form.Check
              inline
              label="Popularity"
              name="popularity"
              type="radio"
              value="popularity"
              onChange={handleRadioChange}
              checked={sortRadioValue === "popularity"}
            />
          </div>
          <div className="sort-element-container">
            <Form.Check
              inline
              label="Price -- Low to High"
              name="price-lowToHigh"
              type="radio"
              value="price-lowToHigh"
              onChange={handleRadioChange}
              checked={sortRadioValue === "price-lowToHigh"}
            />
            {/* <label htmlFor="price-lowToHigh">Price -- Low to High</label> */}
          </div>
          <div className="sort-element-container">
            <Form.Check
              inline
              label="Price -- High to Low"
              name="price-highToLow"
              type="radio"
              value="price-highToLow"
              onChange={handleRadioChange}
              checked={sortRadioValue === "price-highToLow"}
            />
            {/* <label htmlFor="price-highToLow">Price -- High to Low</label> */}
          </div>
          {/* </div> */}
        </Modal.Body>
      </Modal>
      {/* <Modal
        show={showFilterModal}
        fullscreen={matches}
        onHide={handleFilterModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>Filter Things will come here</Modal.Body>
        <Modal.Footer
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="outline" onClick={handleFilterModalClose}>
            0 Product Filtered
          </Button>
          <Button variant="primary" onClick={handleFilterModalClose}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default Buy;
