import React from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => (
  <main>
    <center>
      <div className="breadcrumb">
        <h2>About Us</h2>
        <p>Making learning</p>
      </div>
    </center>
    <Container className="about-main" id="about">
      <Row>
        <Col xs="12">
          <h6>ABOUT EDUFUND</h6>
          <p className="display-2">
            EduFund is a platform where you can raise funds to access
            educational resources online on platforms like learn.dfmlab.com (or
            any platform that supports crypto payment) or for traditional
            schools that will support crypto payment. The idea is that there are
            millions of people in the world today (800 million+ in Africa) who
            are not educated, do not have access to digital education, and do
            not have access to funds to access educational/learning resources.
            They can easily raise funds on the platform; it is as simple as
            creating a new Facebook profile. An interested learner can start a
            campaign (a request to raise money for learning), enter the required
            information, and then submit it for review. For now, the review and
            approval of a new campaign is done by the DFMlab team. The plan is
            to create a DAO where professionals in the area of interest can
            collectively review and approve campaign requests. Once the campaign
            is published, investors or supporters can fund it with just the
            click of a button. The amount raised for a campaign is held in a
            smart contract and is only released to the educator/content creator
            once the learner completes the learning objective. This helps reduce
            the possibility of campaign fraud while providing a credit system to
            access educational materials and content. Through integration,
            existing learning platforms can provide access to educational
            content in advance, with the smart contract providing escrow
            protection. This will protect the learner, educator, and investor on
            the platform. Our solution will ensure: Provide educational funding.
            Reduce crowdfunding platform fraud. Promote cryptocurrency adoption
            by establishing a utility-based economy.
          </p>
        </Col>
      </Row>
    </Container>
  </main>
);

export default About;
