import React from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homePage.Component'
import Header from './components/header/header.component'
import Shop from './pages/shop/shop.component'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={Shop} />
          {/* <HomePage /> */}
        </Switch>
    </div>
  );
}

export default App;
