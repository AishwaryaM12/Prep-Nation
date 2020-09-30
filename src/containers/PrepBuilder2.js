import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './prepBuilder.css';

const prepbuilder = () => (
    <div className="PrepBuilder">
        <Card style={{ width: '20rem' }}>
            <Col xs={100} md={100}>
                <Card.Img style={{ height: "20rem" }} variant="top" src="https://catking.in/wp-content/uploads/2018/04/AMCAT-Logical-Reasoning-Previous-Questions-And-Answers.jpg" />
            </Col>
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content fsafsfsefsdddddd.
                 </Card.Text>
                <div style={{ textAlign: "center" }}>
                    <Button variant="primary">Aptitute</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
);

export default prepbuilder;