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
import VerticalLinearStepper from "./components/checkout/checkout2";
import Footer from "./components/footer/footer";
import Profile from "./components/profile/profile";
import Cart2 from "./components/cart/cart2";
import Contact from "./components/contacto/contact";
import Quienes from "./components/quienes/quienes";

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

  const goToContact = () => {
    history.push("/contact");
  };

  const goToQuienes = () => {
    history.push("/quienes-somos");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  const screenSize = window.screen.width;

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
              goToContact={goToContact}
              goToQuienes={goToQuienes}
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
              <Route
                exact
                path="/checkout"
                component={screenSize <= 600 ? VerticalLinearStepper : Checkout}
              />
              <Route path="/profile" component={Profile} />
              <Route exact path="/cart" component={Cart2} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/quienes-somos" component={Quienes} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default withRouter(App);
