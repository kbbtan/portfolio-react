// CSS Import.
import "./Projects.css";

// Bootstrap Imports.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Image Imports.
import SGExamsImage from "../images/SGExams.png";
import BUSalmonBotImage from "../images/BUSalmonBot.png";

function Projects() {
    return (
        <Container className="mt-5">
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={SGExamsImage} className="card-height"/>
                        <Card.Body>
                            <Card.Title>SGExams Website</Card.Title>
                            <Card.Text>
                                A website for the SGExams organization, a non-profit dedicated to helping underpriveliged students in Singapore.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={BUSalmonBotImage} className="card-height"/>
                        <Card.Body>
                            <Card.Title>BUSalmonBot</Card.Title>
                            <Card.Text>
                                A Telegram bot coded with the pyTelegramBotAPI package to inform users of salmon availability in dining halls.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;