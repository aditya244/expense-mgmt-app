import React, { Component } from 'react';
import BudgetOverview from '../../Components/Budget/BudgetOverview/BudgetOverview';
import CategoryWiseSplit from '../../Components/Category/CategoryWiseSplit/CategoryWiseSplit';
import Fragments from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Home extends Component{
    render() {
        return (
            <Container>
                <Row>
                    <Col className="colContainer"><BudgetOverview/></Col>
                    <Col className="colContainer"><CategoryWiseSplit/></Col>
                </Row>
            </Container>
        );
    }
}

export default Home;