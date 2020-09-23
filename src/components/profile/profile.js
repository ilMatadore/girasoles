import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";

import Image6 from "../../images/ronan-furuta-UeIgm1JZJ_8-unsplash.jpg";

import { UserContext } from "../../context/userContext/userContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(16),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Profile() {
  const classes = useStyles();
  const hi = useHistory();

  const userCtx = useContext(UserContext);

  const [profileFirst_Name, setProfileFirst_Name] = useState("");
  const [profileLast_Name, setProfileLast_Name] = useState("");
  const [profilePhone, setProfilePhone] = useState("");
  // const [profilePwd, setProfilePwd] = useState("");
  // const [profilePwdConf, setProfilePwdConf] = useState("");
  const [profileAddress, setProfileAddress] = useState("");
  const [profileCity, setProfileCity] = useState("");
  const [profileState, setProfileState] = useState("");
  const [profilePostal, setProfilePostal] = useState("");
  const [profileCountry, setProfileCountry] = useState("");

  const profilePhoneChange = (event) => {
    setProfilePhone(event.target.value);
  };

  const profileFirstNameChange = (event) => {
    setProfileFirst_Name(event.target.value);
  };

  const profileLastNameChange = (event) => {
    setProfileLast_Name(event.target.value);
  };

  // const regPwdChange = (event) => {
  //   setRegPwd(event.target.value);
  // };

  // const regPwdConfChange = (event) => {
  //   setRegPwdConf(event.target.value);
  // };

  const profileCityChange = (event) => {
    setProfileCity(event.target.value);
  };

  const profileStateChange = (event) => {
    setProfileState(event.target.value);
  };

  const profileAddressChange = (event) => {
    setProfileAddress(event.target.value);
  };

  const profilePostalChange = (event) => {
    setProfilePostal(event.target.value);
  };

  const profileCountryChange = (event) => {
    setProfileCountry(event.target.value);
  };

  const profileUpdate = () => {
    fetch(`http://localhost:3001/profile/${userCtx.id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: profileFirst_Name ? profileFirst_Name : userCtx.first_name,
        last_name: profileLast_Name ? profileLast_Name : userCtx.last_name,
        phone: profilePhone ? profilePhone : userCtx.phone,
        address: profileAddress ? profileAddress : userCtx.address,
        city: profileCity ? profileCity : userCtx.city,
        state: profileState ? profileState : userCtx.state,
        postal: profilePostal ? profilePostal : userCtx.postal,
        country: profileCountry ? profileCountry : userCtx.country,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          userCtx.updateProfile(user);
          hi.push("/");
        } else {
          console.log("mo");
        }
      });
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${Image6})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        verticalAlign: "center",
        display: "flex",
      }}
    >
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Mi Perfil
          </Typography>
          <div className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  defaultValue={userCtx.first_name}
                  autoFocus
                  onChange={profileFirstNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="lname"
                  defaultValue={userCtx.last_name}
                  onChange={profileLastNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  value={userCtx.email}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="phone"
                  label="Teléfono"
                  id="phone"
                  autoComplete="phone"
                  defaultValue={userCtx.phone}
                  onChange={profilePhoneChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="address"
                  label="Dirección"
                  id="address"
                  autoComplete="address"
                  defaultValue={userCtx.address}
                  onChange={profileAddressChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="city"
                  label="Ciudad"
                  id="city"
                  autoComplete="city"
                  defaultValue={userCtx.city}
                  onChange={profileCityChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="state"
                  name="state"
                  variant="outlined"
                  fullWidth
                  id="state"
                  label="Departamento"
                  defaultValue={userCtx.state}
                  onChange={profileStateChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="postal"
                  name="postal"
                  variant="outlined"
                  fullWidth
                  id="postal"
                  label="Código Postal"
                  autoFocus
                  defaultValue={userCtx.postal}
                  onChange={profilePostalChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="country"
                  label="Pais"
                  id="country"
                  autoComplete="country"
                  defaultValue={userCtx.country}
                  onChange={profileCountryChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={profileUpdate}
            >
              Guardar Cambios
            </Button>
          </div>
        </div>
        <Container className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Mis Pedidos
          </Typography>
          <Paper elevation={0}>
            <Typography component="h2" variant="h6">
              No tiene historial de pedidos
            </Typography>
          </Paper>
        </Container>
      </Container>
    </Container>
  );
}
