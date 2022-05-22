import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

const Confirm = ({ submitForm, startCampaign, prevStep }) => {
  return (
    <Container className="userContainer">
      <Row>
        <Col md={6} className="m-auto">
          <h2 className="text-center text-primary">Confirm Details</h2>
          <ListGroup variant="flush">
            <ListGroup.Item className="my-2 py-3" variant="primary">
              Full name: {startCampaign?.fullName}
            </ListGroup.Item>
            <ListGroup.Item className="my-2 py-3" variant="primary">Email: {startCampaign?.email}</ListGroup.Item>
            <ListGroup.Item className="my-2 py-3" variant="primary">
              Wallet address: {startCampaign?.walletAddress}
            </ListGroup.Item>
            <ListGroup.Item className="my-2 py-3" variant="primary">
              Campaign title: {startCampaign?.campaignTitle}
            </ListGroup.Item>
            <ListGroup.Item className="my-2 py-3" variant="primary">
              Campaign Details: {startCampaign?.campaignDetails}
            </ListGroup.Item>
            <ListGroup.Item className="my-2 py-3" variant="primary">Social(s): {startCampaign?.social}</ListGroup.Item>
            <ListGroup.Item className="my-2 py-3" variant="primary">Amount: &#8358;{startCampaign?.amount}</ListGroup.Item>
          </ListGroup>
          <div className="d-flex">
            <Button
              className="my-3 rounded align-self-end"
              onClick={() => prevStep(startCampaign)}
            >
              Previous
            </Button>
            <Button
              className="rounded my-3 ms-auto"
              onClick={() =>  submitForm(startCampaign)}
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirm;
