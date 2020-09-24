import React from "react";
import "./App.css";
import {
  Switch,
  Route,
  withRouter,
  useHistory,
  Router,
} from "react-router-dom";

import CartProvider from "./context/cartContext/cartContext2.jsx";
import UserProvider from "./context/userContext/userContext";

import Header2 from "./components/header/header2";

import Pricing from "./components/Content/content";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import Checkout from "./components/checkout/checkout";
import Footer from "./components/footer/footer";
import Profile from "./components/profile/profile";
import Cart2 from "./components/cart/cart2";

const App = () => {
  const history = useHistory();

  const handleLogIn = () => {
    history.push("/login");
  };

  const backHome = () => {
    history.push("/");
  };

  const goToCart = () => {
    history.push("/cart");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <UserProvider>
      <CartProvider>
        <Router history={history}>
          <div className="App">
            <Header2
              handleLogIn={handleLogIn}
              backHome={backHome}
              goToCart={goToCart}
              history={history}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Pricing goToCart={goToCart} />}
              />
              <Route
                exact
                path="/login"
                render={() => <SignIn register={handleRegister} />}
              />
              <Route
                exact
                path="/register"
                render={() => <SignUp handleLogIn={handleLogIn} />}
              />
              <Route exact path="/checkout" component={Checkout} />
              <Route path="/profile" component={Profile} />
              <Route exact path="/cart" component={Cart2} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default withRouter(App);
