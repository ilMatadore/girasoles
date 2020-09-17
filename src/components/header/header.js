import React, { useState, useContext } from "react";
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
import SimpleMenu from "../UserMenu/userMenu";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { CartContext } from "../../context/cartContext/cartContext2.jsx";

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
    backgroundColor: "transparent",
  },
  menuButtonHide: {
    marginRight: theme.spacing(2),
    display: "none",
  },
  menuButtonDisplay: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "transparent",
    paddingTop: "10px",
  },
  toolbar: {
    flexWrap: "wrap",
    //backgroundColor: "#eec47c",
  },
  toolbarTitle: {
    width: "200px",
    flexGrow: 1,
    textAlign: "left",
    fontFamily: "Leckerli One",
    //color: "#235e1b",
    color: "#eec47c",
    fontSize: "42px",
  },
  toolbarTitleResp: {
    width: "100px",
    flexGrow: 1,
    textAlign: "left",
    fontFamily: "Leckerli One",
    //color: "#235e1b",
    color: "#eec47c",
    fontSize: "24px",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    //color: "#235e1b",
    color: "#eec47c",
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
  logoResp: {
    height: "70px",
    width: "80px",
    backgroundImage: `url(${Image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
  },
  navHide: {
    display: "none",
  },
}));

export default function ButtonAppBar({
  currentUser,
  handleLogIn,
  handleLogout,
  backHome,
}) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px");
  const [showCart, setShowCart] = useState(false);

  const hideCart = () => {
    setShowCart(!showCart);
  };

  const cartx = useContext(CartContext);

  return (
    <Container className={classes.root}>
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Container
            className={matches ? classes.logo : classes.logoResp}
          ></Container>
          <Typography
            color="inherit"
            noWrap
            className={
              matches ? classes.toolbarTitle : classes.toolbarTitleResp
            }
          >
            Los Girasoles
          </Typography>
          <nav className={matches ? null : classes.navHide}>
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
            {currentUser.id ? (
              <SimpleMenu
                currentUser={currentUser}
                handleLogout={handleLogout}
              />
            ) : null}
            {!currentUser.id ? (
              <Button
                color="inherit"
                variant="outlined"
                className={classes.link}
                onClick={currentUser.id ? handleLogout : handleLogIn}
              >
                {currentUser.id ? "Cerrar Sesion" : "Iniciar Sesion"}
              </Button>
            ) : null}
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
            <span style={{ verticalAlign: "middle" }}>
              ({cartx.cartItemsCount})
            </span>
          </Link>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon
              className={
                matches ? classes.menuButtonHide : classes.menuButtonDisplay
              }
            ></MenuIcon>
          </IconButton>
          {showCart ? (
            <nav>
              <Cart hideCart={hideCart} />
            </nav>
          ) : null}
        </Toolbar>
      </AppBar>
    </Container>
  );
}
