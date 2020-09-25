import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { UserContext } from "../../context/userContext/userContext";
import { useHistory } from "react-router-dom";

import Image3 from "../../images/inigo-de-la-maza-s285sDw5Ikc-unsplash.jpg";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loginBox: {
    backgroundColor: "white",
    width: "40%",
    borderRadius: "20px",
    margin: "auto",
    marginTop: "150px",
    marginBottom: "50px",
  },
  loginBox2: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: "20px",
    margin: "auto",
    marginTop: "100px",
    marginBottom: "50px",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px");

  const uctx = useContext(UserContext);
  const h = useHistory();
  const [loginEmail, setLoginEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleEmailChange = (event) => {
    setLoginEmail(event.target.value);
  };

  const handlePwdChange = (event) => {
    setPwd(event.target.value);
  };

  const handleRegister = () => {
    h.push("/register");
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
      .then((user) => {
        if (user.id) {
          uctx.successLogin(user);
          h.push("/");
        } else {
          console.log("mo");
        }
      });
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${Image3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        //height: "100vh",
        maxHeight: "200vh",
        verticalAlign: "center",
        display: "flex",
      }}
    >
      <CssBaseline />
      <Box
        component="div"
        m={1}
        className={matches ? classes.loginBox : classes.loginBox2}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio de Sesión
          </Typography>
          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePwdChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              //fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs={6} style={{ padding: "5px" }}>
                <Link href="#" variant="body2">
                  ¿No recuerdas tu contraseña?
                </Link>
              </Grid>
              <Grid item xs={6} style={{ padding: "5px" }}>
                <Link href="#" variant="body2" onClick={handleRegister}>
                  "Registrate aqui"
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    </Container>
  );
}
