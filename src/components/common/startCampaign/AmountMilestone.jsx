import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const AmountMilestone = ({setStartCampaign, startCampaign, nextStep, prevStep   }) => {
    return (
        <Container className="userContainer">
      <Row>
        <Col md={6} className="m-auto p-5">
          <h2 className="mb-3 text-primary">Create a new campaign</h2>
          <Form className="d-flex flex-column ">
            <label htmlFor="name" className="mt-2">
              Amount
            </label>
            <input
              type="text"
              name="amount"
              id="amount"
              placeholder="Enter amount or create milestones"
              className="my-2 ps-2 py-2"
              onChange={(e) =>
                setStartCampaign({ ...startCampaign, amount: e.target.value })
              }
              value={startCampaign?.amount}
              required
            />
            <div className="d-flex my-5">
            <label htmlFor="name" className="mt-2">
              Deadline
            </label>
            <input
              type="date"
              name="social"
              id="social"
              multiple
              placeholder="Enter amount"
              className="w-50  my-2 ps-2 py-2 "
              onChange={(e) =>
                setStartCampaign({
                  ...startCampaign,
                  date: e.target.value
                })
              }
            />
            
            <Button className="m-0 ms-4 py-0 px-3 fs-3 rounded">+</Button>
            </div>

            
            <div className="d-flex">
              <Button
                className="my-3 rounded align-self-end"
                onClick={() => prevStep(startCampaign)}
              >
                Previous
              </Button>
              <Button
                className="rounded my-3 ms-auto"
                onClick={() => nextStep(startCampaign)}
              >
                Next
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    )
}

export default AmountMilestone
