import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

import "./Footer.css";

export default function SubscribeForm({ subscribe, status, message }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    subscribe({ EMAIL: email, MERGE0: email });
  };

  useEffect(() => {
    if (status === "success") {
      setEmail("");
    }
  }, [status]);

  return (
    <Form onSubmit={handleSubscribe}>
      <Row className="align-items-left">
        <Col xs="8 g-1">
          <InputGroup hasValidation>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
              required
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </InputGroup>
        </Col>
        <Col xs="4 g-1">
          <Button type="submit" className="form-submit">
            {status === "sending" ? "Loading..." : "Subscribe"}{" "}
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Button>
        </Col>

        <div className="mt-3">
          <p
            style={{
              color: status === "success" ? "lightgreen" : "red",
            }}
          >
            {message}
          </p>
        </div>

        <div className="social-icons">
          <a
            href="https://facebook.com/swapbase"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a
            href="https://instagram.com/swapbase_io"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <i className="fa-brands fa-linkedin"></i>
          <a
            href="https://twitter.com/swapbase"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </Row>
    </Form>
  );
}
