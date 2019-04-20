import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';

import Navbar from './componets/Navbar';
import ProductList from './componets/ProductList';
import Cart from './componets/Cart';
import Default from './componets/Default';
import Details from './componets/Details';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList} />
         
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        
        
       
       
      </React.Fragment>
    );
  }
}

export default App;
