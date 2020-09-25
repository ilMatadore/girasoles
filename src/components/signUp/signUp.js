import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image4 from "../../images/markus-winkler-HeqXGxnsnX4-unsplash.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { UserContext } from "../../context/userContext/userContext";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signUpBox: {
    backgroundColor: "white",
    width: "40%",
    borderRadius: "20px",
    margin: "auto",
    marginTop: "150px",
    marginBottom: "50px",
  },
  signUpBox2: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: "20px",
    margin: "auto",
    marginTop: "100px",
    marginBottom: "50px",
  },
}));

export default function SignUp() {
  const userCtx = useContext(UserContext);
  const h = useHistory();

  const handleLogIn = () => {
    h.push("/login");
  };

  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  const [regFirst_Name, setRegFirst_Name] = useState("");
  const [regLast_Name, setRefLast_Name] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regPwd, setRegPwd] = useState("");
  const [regPwdConf, setRegPwdConf] = useState("");
  const [regAddress, setRegAddress] = useState("");
  const [regCity, setRegCity] = useState("");
  const [regState, setStateCity] = useState("");
  const [regPostal, setRegPostal] = useState("");
  const [regCountry, setRegCountry] = useState("");

  const regEmailChange = (event) => {
    setRegEmail(event.target.value);
  };

  const regPhoneChange = (event) => {
    setRegPhone(event.target.value);
  };

  const regFirstNameChange = (event) => {
    setRegFirst_Name(event.target.value);
  };

  const regLastNameChange = (event) => {
    setRefLast_Name(event.target.value);
  };

  const regPwdChange = (event) => {
    setRegPwd(event.target.value);
  };

  const regPwdConfChange = (event) => {
    setRegPwdConf(event.target.value);
  };

  const regCityChange = (event) => {
    setRegCity(event.target.value);
  };

  const regStateChange = (event) => {
    setStateCity(event.target.value);
  };

  const regAddressChange = (event) => {
    setRegAddress(event.target.value);
  };

  const regPostalChange = (event) => {
    setRegPostal(event.target.value);
  };

  const regCountryChange = (event) => {
    setRegCountry(event.target.value);
  };

  const submitRegister = () => {
    if (regPwd === regPwdConf) {
      fetch("http://localhost:3001/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: regFirst_Name,
          last_name: regLast_Name,
          email: regEmail,
          phone: regPhone,
          password: regPwd,
          address: regAddress,
          city: regCity,
          state: regState,
          postal: regPostal,
          country: regCountry,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user.id) {
            userCtx.successLogin(user);
            h.push("/");
          } else {
            console.log("mo");
          }
        });
    } else {
      console.log("no pwd matching");
    }
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${Image4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        //height: "100vh",
        maxHeight: "200vh",
        verticalAlign: "center",
        display: "flex",
      }}
    >
      <Box
        component="div"
        m={1}
        className={matches ? classes.signUpBox : classes.signUpBox2}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <div className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  onChange={regFirstNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="lname"
                  onChange={regLastNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  id="email"
                  fullWidth
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                  onChange={regEmailChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  id="phone"
                  fullWidth
                  label="Teléfono"
                  name="phone"
                  autoComplete="phone"
                  onChange={regPhoneChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={regPwdChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirmar Contraseña"
                  type="confirmPassword"
                  id="confirmPassword"
                  onChange={regPwdConfChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="address1"
                  label="Dirección"
                  id="address1"
                  autoComplete="address1"
                  onChange={regAddressChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="city"
                  label="Ciudad"
                  id="address"
                  autoComplete="address"
                  onChange={regCityChange}
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
                  onChange={regStateChange}
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
                  onChange={regPostalChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="country"
                  label="País"
                  id="country"
                  autoComplete="country"
                  onChange={regCountryChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Deseo recibir correos electronicos con promociones"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitRegister}
            >
              Registrarse
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={handleLogIn}>
                  Ya tienes una cuenta? Inicia Sesión
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    </Container>
  );
}
