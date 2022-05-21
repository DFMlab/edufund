import React from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card, Image, ProgressBar, Form} from "react-bootstrap";

import "./Home.css";

const Home = () => (
  <main>
    <div className="mainPage">
      <Container>
        <Row>
          <Col xs="6" className="mainLeft">
            <h2>Learning should be <span style={{color: '#2B53AE'}}>easy and accessible</span> to all</h2>
            <p>At Edufund we create equal opportunity for passionate learners to learn and earn with digital skills</p>
            <button className="btn btn-primary">Get Started</button>
          </Col>
          <Col xs="6" className="mainRight">
            <img src="learning.gif" alt="learning" width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
    <section>
      <Container className="clients">
        <Row>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i className="fab fa-vimeo"></i> Vimeo
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i className="fab fa-pinterest"></i> Pinterest
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i className="fab fa-dribbble"></i> Dribble
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i className="fab fa-apple"></i> Apple
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i className="fab fa-finder"></i> Finder
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <i className="fab fa-google-plus"></i> Google
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
    <div className="our-types">
      <Container>
        <h2>
          How It Works
        </h2>
        <Row style={{ marginLeft: "0px !important", marginRight: "0px" }}>
          <Col xs="4">
            <Card style={{ width: "24rem" }} className="shadow p-3 mb-5 bg-body rounded type-card">
              <Card.Body>
                <Card.Title
                  className="type-card__title"
                  style={{ display: "flex" }}
                >
                 <i className="fa fa-check-circle"></i> Step 1
                </Card.Title>
                <Card.Text>
                  Create Campaign
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card style={{ width: "24rem" }} className="shadow p-3 mb-5 bg-body rounded type-card">
              <Card.Body>
                <Card.Title
                  className="type-card__title"
                  style={{ display: "flex" }}
                >
                 <i className="fa fa-info-circle"></i> Step 2
                </Card.Title>
                <Card.Text>
                  Add neccessary information
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card style={{ width: "24rem" }} className="shadow p-3 mb-5 bg-body rounded type-card">
              <Card.Body>
                <Card.Title
                  className="type-card__title"
                  style={{ display: "flex" }}
                >
                  <i className="fa fa-share"></i> Step 3
                </Card.Title>
                <Card.Text>
                  post and share campain
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="our-types-future">
      <Container>
        <h2>
          Meet Future Innovators
        </h2>
        <Row style={{ marginLeft: "0px !important", marginRight: "0px" }}>
          <Col xs="4">
            <Card style={{ width: "24rem" }} className="shadow p-0 mb-2 bg-body rounded type-card">
              <Card.Body>
                <Image src="django.jpg" width="100%" />
                <Card.Title
                  className="type-card__title"
                > Help me learn Django
                </Card.Title>
                <Card.Subtitle className="subtitle">
                My name is Femi. i'm interested in learning Django framework for backend development. I saw a course online with a lot of rating on Udemy
                <br /> <br />
                <ProgressBar now={60} />
                <Form>
                  <div className="custom-amount">
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                  </div>
                  <div className="desired-amount">
                    <Form.Control name="custom amount" placeholder="Enter a custom amount" />
                    <button className="btn btn-primary">Donate</button>
                  </div>
                </Form>
                <div className="amount">
                  <p>Amount raised</p>
                  <p>60%</p>
                </div>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card style={{ width: "24rem" }} className="shadow p-0 mb-2 bg-body rounded type-card">
              <Card.Body>
                <Image src="django.jpg" width="100%" />
                <Card.Title
                  className="type-card__title"
                > Help me learn Django
                </Card.Title>
                <Card.Subtitle className="subtitle">
                My name is Femi. i'm interested in learning Django framework for backend development. I saw a course online with a lot of rating on Udemy
                <br /> <br />
                <ProgressBar now={60} />
                <Form>
                  <div className="custom-amount">
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                  </div>
                  <div className="desired-amount">
                    <Form.Control name="custom amount" placeholder="Enter a custom amount" />
                    <button className="btn btn-primary">Donate</button>
                  </div>
                </Form>
                <div className="amount">
                  <p>Amount raised</p>
                  <p>60%</p>
                </div>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card style={{ width: "24rem" }} className="shadow p-0 mb-2 bg-body rounded type-card">
              <Card.Body>
                <Image src="django.jpg" width="100%" />
                <Card.Title
                  className="type-card__title"
                > Help me learn Django
                </Card.Title>
                <Card.Subtitle className="subtitle">
                My name is Femi. i'm interested in learning Django framework for backend development. I saw a course online with a lot of rating on Udemy
                <br /> <br />
                <ProgressBar now={60} />
                <Form>
                  <div className="custom-amount">
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                      <Form.Control type="text" value="$30" />
                  </div>
                  <div className="desired-amount">
                    <Form.Control name="custom amount" placeholder="Enter a custom amount" />
                    <button className="btn btn-primary">Donate</button>
                  </div>
                </Form>
                <div className="amount">
                  <p>Amount raised</p>
                  <p>60%</p>
                </div>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </main>
);

export default Home;
