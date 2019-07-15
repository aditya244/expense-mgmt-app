import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

class Settings extends Component{
    render() {
        return (
            <Container>
                <Form className="form_container">
                    <Row>
                        <Col>
                            <label className="label-text">Total Budget</label>
                        </Col>
                        <Col>
                            <Form.Control/>
                        </Col>
                        <Col>
                            <Button variant="success"> Update</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default Settings;