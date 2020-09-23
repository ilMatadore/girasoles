import React, { useState, useContext } from "react";
import "./App.css";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";

import CartProvider from "./context/cartContext/cartContext2.jsx";
import UserProvider from "./context/userContext/userContext";
import { UserContext } from "./context/userContext/userContext";

import Header2 from "./components/header/header2";

import Pricing from "./components/Content/content";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import Checkout from "./components/checkout/checkout";
import Footer from "./components/footer/footer";
import Profile from "./components/profile/profile";
import Cart from "./components/cart/cart";
//import TemporaryDrawer from "./components/Drawer/drawer";

const App = () => {
  //const userCtx = useContext(UserContext);

  // const [loginEmail, setLoginEmail] = useState("");
  // const [pwd, setPwd] = useState("");
  // const [currentUser, setCurrentUser] = useState({
  //   id: "",
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  // });

  // const handleEmailChange = (event) => {
  //   setLoginEmail(event.target.value);
  // };

  // const handlePwdChange = (event) => {
  //   setPwd(event.target.value);
  // };

  // const handleLogout = () => {
  //   setCurrentUser({
  //     id: "",
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //   });
  //   history.push("/");
  // };
  const history = useHistory();

  const handleLogIn = () => {
    history.push("/login");
  };

  // const handleProfile = () => {
  //   history.push("/profile");
  // };

  const backHome = () => {
    history.push("/");
  };

  const goToCart = () => {
    history.push("/cart");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  // const submitLogin = () => {
  //   fetch("http://localhost:3001/", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: loginEmail,
  //       password: pwd,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((user) => {
  //       if (user.id) {
  //         userCtx.successLogin()
  //         history.push("/");
  //       } else {
  //         console.log("mo");
  //       }
  //     });
  // };

  return (
    <UserProvider>
      <CartProvider>
        <div className="App">
          <Header2
            //currentUser={currentUser}
            handleLogIn={handleLogIn}
            backHome={backHome}
            //handleLogout={handleLogout}
            goToCart={goToCart}
            //handleProfile={handleProfile}
          />
          <Switch>
            <Route exact path="/" render={() => <Pricing />} />
            <Route
              exact
              path="/login"
              render={() => (
                <SignIn
                  register={handleRegister}
                  // submitLogin={submitLogin}
                  //handleEmailChange={handleEmailChange}
                  //handlePwdChange={handlePwdChange}
                />
              )}
            />
            <Route
              exact
              path="/register"
              render={() => <SignUp handleLogIn={handleLogIn} />}
            />
            <Route exact path="/checkout" component={Checkout} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/cart" component={Cart} />
          </Switch>

          <Footer />
        </div>
      </CartProvider>
    </UserProvider>
  );
};

export default withRouter(App);
