import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './prepBuilder.css'

const prepbuilder = () => (
    <div className="PrepBuilder">
        <Card style={{ width: '20rem' }}>
            <Col xs={20} md={40}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg" />
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