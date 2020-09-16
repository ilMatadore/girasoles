import React, { useState, createContext } from "react";

export const UserContext = createContext({
  id: "",
  first_name: "",
  last_name: "",
  email: "",
  address: {
    address1: "",
    address2: "",
    city: "",
    state: "",
    postal: "",
    country: "",
  },
});

export const UserProvider = (props) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [currentUser, setCurrentUser] = useState(UserContext);
  return (
    <UserContext.Provider
      value={[email, setEmail, pwd, setPwd, { currentUser }, setCurrentUser]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
