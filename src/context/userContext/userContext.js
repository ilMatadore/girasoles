import React, { useState, createContext } from "react";

export const UserContext = createContext({
  id: "",
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  phone: "",
  city: "",
  state: "",
  postal: "",
  country: "",
  successLogin: () => {},
  userLogout: () => {},
  updateProfile: () => {},
});

const UserProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");
  const [country, setCountry] = useState("");

  const successLogin = (user) => {
    setId(user.id);
    setFirst_Name(user.first_name);
    setLast_Name(user.last_name);
    setEmail(user.email);
    setAddress(user.address);
    setPhone(user.phone);
    setCity(user.city);
    setState(user.state);
    setPostal(user.postal);
    setCountry(user.country);
  };

  const userLogout = () => {
    setId(undefined);
    setFirst_Name("");
    setLast_Name("");
    setEmail("");
    setAddress("");
    setPhone("");
    setCity("");
    setState("");
    setPostal("");
    setCountry("");
  };

  const updateProfile = (user) => {
    setId(user.id);
    setFirst_Name(user.first_name);
    setLast_Name(user.last_name);
    setEmail(user.email);
    setAddress(user.address);
    setPhone(user.phone);
    setCity(user.city);
    setState(user.state);
    setPostal(user.postal);
    setCountry(user.country);
  };

  const [pwd] = useState("");
  // const [currentUser, setCurrentUser] = useState(UserContext);
  return (
    <UserContext.Provider
      value={{
        email,
        id,
        first_name,
        last_name,
        pwd,
        address,
        city,
        state,
        country,
        phone,
        postal,
        successLogin,
        userLogout,
        updateProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
