import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import CategoryList from '../CategoryList/CategoryList';

class Categories extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getName.value;
        const data = {
          id: new Date(),
          title,
        }
        this.props.dispatch({
            type:'ADD',
            data});
          this.getName.value = '';
    }

    render() {
        return (
            <Container className="form_container">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <label className="label-text">Categories</label>
                        </Col>
                        <Col>
                            <Form.Control required type="text" ref={(input)=>this.getName = input} 
                                        placeholder="Category Name"/>
                        </Col>
                        <Col>
                            <Button variant ="success" type="submit">Add</Button>
                        </Col>
                    </Row>
                </Form>
                <CategoryList category_names={this.props.category_names}/>
                {console.log(this.props.category_names)}
            </Container> 
        );
    };
}

export default connect()(Categories);