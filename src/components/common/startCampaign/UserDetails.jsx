import { Container, Col, Row, Form, Button } from "react-bootstrap";

export default function UserDetails({
  nextStep,
  startCampaign,
  setStartCampaign,
}) {
  return (
    <div>
      <Container className="userContainer">
        <Row>
          <Col md={6} className="m-auto p-5">
            <h2 className="mb-3 text-primary">Create a new campaign</h2>
            <Form className="d-flex flex-column ">
              <label htmlFor="name" className="mt-2">
                Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your full name"
                className="my-2 ps-2 py-3"
                onChange={(e) =>
                  setStartCampaign({
                    ...startCampaign,
                    fullName: e.target.value,
                  })
                }
                value={startCampaign?.fullName}
              />
              <label htmlFor="email" className="mt-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johnDoe@example.com"
                className="my-2 ps-2 py-3 "
                onChange={(e) =>
                  setStartCampaign({ ...startCampaign, email: e.target.value })
                }
                value={startCampaign?.email}
              />
              <label htmlFor="wallet address" className="mt-2">
                Wallet address
              </label>
              <input
                type="text"
                name="wallet"
                id="wallet"
                placeholder="Enter your wallet address"
                className="my-2 ps-2 py-3"
                onChange={(e) =>
                  setStartCampaign({
                    ...startCampaign,
                    walletAddress: e.target.value,
                  })
                }
                value={startCampaign?.walletAddress}
              />
              <Button
              type="submit"
                className="w-25 my-3 align-self-end rounded"
                onClick={() => nextStep(startCampaign)}
              >
                Next
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
