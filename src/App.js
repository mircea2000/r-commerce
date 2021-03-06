import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Checkout from './pages/checkout/checkout.component'

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
// import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selector'
import { createStructuredSelector} from 'reselect'

//  import { selectCollectionsForPreview } from './redux/shop/shop.selectors'


class App extends React.Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {

    // Adding collections in firebase
    // const { setCurrentUser, collectionsArray } = this.props; 
    const { setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      // // this.setState({currentUser: user})
      // console.log(user)
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()            
          })
        })
      }
      setCurrentUser(userAuth)
      // To add data to firebase
      // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })))
    }, error => console.log(error))
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/signin" exact render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp/>)} />
            {/* <HomePage /> */}
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);