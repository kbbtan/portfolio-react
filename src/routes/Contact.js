// Bootstrap Imports.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// React Icons Imports.
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

function Contact() {
    return (
      <Container className="mt-5">
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <h2>Send a Note!</h2>

                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>From:</Form.Label>
                        <Form.Control type="email" placeholder="johndoe@yahoo.edu" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={13} />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                </Col>

                <Col>
                  <Container className="d-flex flex-column justify-content-center h-100">
                    <Card bg="danger" text="light">
                      <Card.Body><MdEmail/> kbbtan@bu.edu</Card.Body>
                    </Card>
                    <Card bg="dark" text="light" className="mt-5">
                      <Card.Body><BsGithub/> kbbtan</Card.Body>
                    </Card>
                  </Container>
                </Col>
            </Row>
        </Container>
    )
  }
  
  export default Contact;