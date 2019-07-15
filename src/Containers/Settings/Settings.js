import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Categories from '../../Components/Category/Categories/Categories';
import TotalBudget from '../../Components/Budget/TotalBudget/TotalBudget';
import { connect } from 'react-redux';

class Settings extends Component{
    render() {
        return (
            <Container>
                <TotalBudget/>
                <Categories category_names={this.props.category_names}/>
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        category_names: state
    }
  };
  
//export default (App);

export default connect(mapStateToProps)(Settings);