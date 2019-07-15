import React from 'react';
import { Button } from 'react-bootstrap';
import {connect } from 'react-redux';

const CategoryName = (props) =>  {
    return  (
        <div className="categoryName">
            <p>{props.title} <Button variant="danger" onClick={()=> props.dispatch({type: 'DELETE', 
id: props.id})}> X </Button></p>
        {console.log(props.title, props.id)}
        </div>
    )
}


export default connect()(CategoryName);