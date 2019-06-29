import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/headerComponent';
import FormComponent from './components/formComponent';

import ProductsComponent from './components/productsComponent';
import ProductComponent from './components/productComponent';
import CartComponent from './components/cartComponent';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      param : 'laptop'
    }
  }

  render() {
    return (
      <div>

        {/* <Form /> */}
        <Router>

          <nav>
            <ul>
              <li className="navigationLink">
                <Link to="/products">Products</Link>
              </li>
              <li className="navigationLink">
                <Link to={`product/${this.state.param}`}>Product</Link>
              </li>
              <li className="navigationLink">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
          
          {/* <FormComponent></FormComponent> */}

          <Switch>
            <Route path="/" exact component={FormComponent}></Route>
            <Route path="/products" exact component={ProductsComponent}></Route>
            <Route path="/product/:id" exact component={ProductComponent}></Route>
            <Route path="/cart" exact component={CartComponent}></Route>
          </Switch>          

        </Router>
      </div>
    )
  }
}

//Types of routing by react-router-dom
//BrowserRouter
//HashRouter

//Route
//Link
//Switch



//xmlhttpRequest
//ajax
//promise --> resolve, reject

//promise.all [promise1, promise2] --> 
//promise.race [promise1, promise2]








export default App;
