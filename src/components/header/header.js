import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Image from "../../images/logo3.png";
import Cart from "../cart/cart";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
    backgroundColor: "#eec47c",
  },
  toolbarTitle: {
    width: "400px",
    flexGrow: 1,
    textAlign: "left",
    fontFamily: "Leckerli One",
    color: "#235e1b",
    fontSize: "42px",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "#235e1b",
    cursor: "pointer",
  },
  logo: {
    height: "90px",
    width: "100px",
    backgroundImage: `url(${Image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
  },
}));

export default function ButtonAppBar({
  currentUser,
  handleLogIn,
  handleLogout,
  backHome,
}) {
  const classes = useStyles();

  const [showCart, setShowCart] = useState(false);

  const hideCart = () => {
    if (showCart === false) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  return (
    <Container className={classes.root}>
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Container className={classes.logo}></Container>
          <Typography color="inherit" noWrap className={classes.toolbarTitle}>
            Los Girasoles
          </Typography>
          <Link>
            <InstagramIcon
              variant="button"
              fontSize="large"
              color="textPrimary"
              href="#"
              className={classes.link}
            />
          </Link>
          <Link>
            <WhatsAppIcon
              variant="button"
              fontSize="large"
              color="textPrimary"
              href="#"
              className={classes.link}
            />
          </Link>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
              onClick={backHome}
            >
              Inicio
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Quienes somos
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Contacto
            </Link>
            <Link
              variant="button"
              color="inherit"
              href="#"
              className={classes.link}
            >
              {currentUser.id ? `Bienvenido ${currentUser.first_name}` : ""}
            </Link>
          </nav>
          <Link
            variant="button"
            color="inherit"
            className={classes.link}
            onClick={() => {
              hideCart();
            }}
          >
            <ShoppingCartOutlinedIcon fontSize="large" />
          </Link>
          <Button
            href="#"
            variant="outlined"
            className={classes.link}
            onClick={currentUser.id ? handleLogout : handleLogIn}
          >
            {currentUser.id ? "Cerrar Sesion" : "Iniciar Sesion"}
          </Button>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {showCart ? (
            <nav>
              <Cart />
            </nav>
          ) : null}
        </Toolbar>
      </AppBar>
    </Container>
  );
}
