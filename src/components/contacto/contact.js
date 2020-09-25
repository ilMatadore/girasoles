import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import Image8 from "../../images/markus-spiske-sFydXGrt5OA-unsplash.jpg";

import { UserContext } from "../../context/userContext/userContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
    marginTop: "100px",
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
  mensaje: {
    minHeight: "300px",
    overFlow: "scroll",
    maxHeight: "300px",
  },
}));

export default function Contact() {
  const classes = useStyles();

  const userCtx = useContext(UserContext);

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${Image8})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxHeight: "200vh",
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
            Contacto
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
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextareaAutosize
                  maxLength="200"
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Roboto",
                    width: "800px",
                    height: "300px",
                    resize: "none",
                    borderRadius: "5px",
                    padding: "20px",
                    maxWidth: "100%",
                  }}
                  aria-label="minimum height"
                  rowsMin={6}
                  rowsMax={20}
                  fullWidth
                  placeholder="Escriba su mensaje aqui (maximo 200 caracteres)"
                  label="Mensaje"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography align="center">
                  Te contactaremos a la brevedad.
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Enviar Mensaje
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
}
