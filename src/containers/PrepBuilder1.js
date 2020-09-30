import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './prepBuilder.css'

const prepbuilder = () => (
    <div className="PrepBuilder">
        <Card style={{ width: '20rem' }}>
            <Col xs={20} md={40}>
                {/* <Image src="holder.js/171x180" thumbnail /> */}
                <Card.Img variant="top" fluid src="https://lh3.googleusercontent.com/4Ya5t6iOb-smBWAUsFo-BjiM1kKgQu768Nj9qOmRNHvLGhUVLCI8VmkrzqVeEJOGmw" />
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