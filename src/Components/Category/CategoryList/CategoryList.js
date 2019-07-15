import React, { Component} from 'react';
import CategoryName from '../CategoryName/CategoryName';
import { Container } from 'react-bootstrap';

class CategoryList extends Component{
    render(){
        return(
            <Container>
                <div className="categoryList">
                    {this.props.category_names.map((item) => 
                        <CategoryName id = {item.id} key={item.id} title={item.title}/>
                    )}
                </div>
            </Container>
        )
    }
}

// const CategoryList = (props) => {
//     return (
//          <div>
//             {props.category_names.map((name) => 
//                 <CategoryName key = {name.id} name={name}/>
//             )}
//         </div>
//     );
// };

export default CategoryList;