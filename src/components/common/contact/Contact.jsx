import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <main>
      <center>
        <div className="breadcrumb">
          <h2>Contact Us</h2>
          <p>Bridging the gap between the physical and the digital world</p>
        </div>
      </center>
      <Container>
        <Row className="cont">
          <Col xs="4">
            <div className="info-box">
              <h6>Details</h6>
              <p>info@swapbase.io</p>
              <p>+234 7068 365 435</p>
              <p>+44 7796 010762</p>
              <br></br>
            </div>
            <br />
            <br />
            <div className="appointment">
              <h4>Dedicated Customer Support</h4>
              <p>React Out For Any Questions</p>
              <hr style={{ width: "100px" }} />
              <h6>
                Our global presence ensures the responsiveness and cost
                efficiency compliance required to meet your production
                deadlines.
              </h6>
              <br />
              <Button variant="appoint" type="submit">
                Schedule An Appointment
              </Button>
            </div>
          </Col>
          <Col
            xs="8 shadow p-3 mb-5 bg-body rounded"
            className="contact"
            id="contact"
          >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter your first name here..."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  required
                  placeholder="Enter your last name here..."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address here..."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  style={{
                    lineHeight: "unset",
                  }}
                  name="message"
                  as="textarea"
                  placeholder="Tell us what you need help with"
                  required
                  rows="3"
                />
              </Form.Group>
              <Button variant="new" type="submit">
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Contact;
