import React from "react";
import { Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContractKit } from "@celo-tools/use-contractkit";

import "./Header.css";

const Header = () => {
  const { connect, address, destroy } = useContractKit();

  const ConnectButton = () => {
    return address ? (
      <Button
        onClick={async () => {
          try {
            await destroy();
          } catch {}
        }}
        variant="outline-success"
      >
        Disconnect Wallet
      </Button>
    ) : (
      <Button
        onClick={async () => {
          try {
            await connect();
          } catch {}
        }}
        variant="outline-success"
      >
        Connect Wallet
      </Button>
    );
  };

  return (
    <main>
      <Navbar bg="transparent" className="desktop" expand="lg" fixed="top">
        <div className="offcanvas-header">
          <button className="btn-close float-end"></button>
        </div>
        <Navbar.Brand as={Link} to="/">
          <img src="logo-black.png" alt="brand-logo" height={"100px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/startCampaign">
              Start Campaign
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <ConnectButton />
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mobile">
        <Navbar bg="transparent" fixed="top" collapseOnSelect expand="false">
          <Navbar.Brand as={Link} to="/">
            <img src="logo-black.png" alt="brand-logo" width={"150px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src="logo-black.png" alt="brand-logo" width={"250px"} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" eventKey="3">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" eventKey="4">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/startcampaign" eventKey="5">
                  Start Campaign
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <ConnectButton />
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </main>
  );
};

export default Header;
