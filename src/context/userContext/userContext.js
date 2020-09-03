import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [currentUser, setCurrentUser] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  return (
    <UserContext.Provider
      value={[email, setEmail, pwd, setPwd, { currentUser }, setCurrentUser]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
