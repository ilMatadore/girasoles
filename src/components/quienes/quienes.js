import React from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Image9 from "../../images/nathan-dumlao-m6DAgQyxjAo-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Quienes() {
  const classes = useStyles();
  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${Image9})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        //height: "100vh",
        maxHeight: "200vh",
        verticalAlign: "center",
        display: "flex",
      }}
    >
      <CssBaseline />
      <Box component="div" m={1} />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Quienes Somos
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
          />
        </div>
      </div>
    </Container>
  );
}
