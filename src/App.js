import React, { useState } from "react";
import "./App.css";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";

import CartProvider from "./context/cartContext/cartContext2.jsx";

import ButtonAppBar from "./components/header/header";
import Pricing from "./components/Content/content";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import Checkout from "./components/checkout/checkout";
import Footer from "./components/footer/footer";
import Profile from "./components/profile/profile";
import TemporaryDrawer from "./components/Drawer/drawer";

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [currentUser, setCurrentUser] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
  });

  const handleEmailChange = (event) => {
    setLoginEmail(event.target.value);
  };

  const handlePwdChange = (event) => {
    setPwd(event.target.value);
  };

  const handleLogout = () => {
    setCurrentUser({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
    });
    history.push("/");
  };
  const history = useHistory();

  const handleLogIn = () => {
    history.push("/login");
  };

  const backHome = () => {
    history.push("/");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  const submitLogin = () => {
    fetch("http://localhost:3001/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: loginEmail,
        password: pwd,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (Object.entries(data)[0][1] === "Success!") {
          let current = Object.entries(data)[1][1];
          setCurrentUser((prevState) => ({
            ...prevState,
            email: current.email,
            first_name: current.first_name,
            last_name: current.last_name,
            id: current.id,
          }));
          history.push("/");
        }
      });
  };

  return (
    <CartProvider>
      <div className="App">
        <ButtonAppBar
          currentUser={currentUser}
          handleLogIn={handleLogIn}
          backHome={backHome}
          handleLogout={handleLogout}
        />
        <Switch>
          <Route exact path="/" render={() => <Pricing />} />
          <Route
            exact
            path="/login"
            render={() => (
              <SignIn
                register={handleRegister}
                submitLogin={submitLogin}
                handleEmailChange={handleEmailChange}
                handlePwdChange={handlePwdChange}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={() => <SignUp handleLogIn={handleLogIn} />}
          />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <TemporaryDrawer />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default withRouter(App);
