import {Container, Row, Col} from 'react-bootstrap'

const Success = () => {

    return (
        <Container className="userContainer">
            <Row>
                <Col md={7} className="m-auto text-center">
                    <h3 className="text-primary display-5">Congratulations</h3>
                    <p>You have created a new campaign</p>

                    <div className="w-50 m-auto">
                        we will send you an email once your campaign has been accepte. You can start sharing your campaign with potential supports, friends and family.
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Success
