import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homePage.Component';
import Header from './components/header/header.component';
import Shop from './pages/shop/shop.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import './App.css';
// import { setState } from 'expect/build/jestMatchersObject';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }

  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      // // this.setState({currentUser: user})
      // console.log(user)
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      }
      this.setState({currentUser: userAuth})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/signin" exact component={SignInAndSignUp} />
            {/* <HomePage /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
