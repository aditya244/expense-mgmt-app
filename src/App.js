import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home/Home';
import Profile from './Containers/Profile/Profile';
import Settings from './Containers/Settings/Settings';
import { Container, Nav } from 'react-bootstrap';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return  (
          <BrowserRouter>
              <Nav className="flex-column Navbar">
                <NavLink to="/" exact ><li activeClassName = "button_active" className="nav-item" >Home</li></NavLink>
                <NavLink to="/profile"><li activeClassName = "button_active" className="nav-item" >Profile</li></NavLink>
                <NavLink to="/settings"><li activeClassName = "button_active" className="nav-item" >Settings</li></NavLink>
              </Nav>
              <Route path="/" exact component={Home}/>
              <Route path="/profile" exact component={Profile}/>
              <Route path="/settings" exact component={Settings}/>
              {console.log(this.props.category_names)}
          </BrowserRouter>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//       category_names: state
//   }
// };

// export default connect(mapStateToProps)(App);

export default App;
