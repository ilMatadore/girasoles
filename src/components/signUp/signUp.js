import React from "react";
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

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4),
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
  },
  signUpBox2: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: "20px",
    margin: "auto",
  },
}));

export default function SignUp({ handleLogIn }) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${Image4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  id="email"
                  fullWidth
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="address1"
                  label="Dirección"
                  id="address1"
                  autoComplete="address1"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="city"
                  name="city"
                  variant="outlined"
                  fullWidth
                  id="city"
                  label="Ciudad"
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
