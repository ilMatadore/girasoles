import React, { useContext } from "react";
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

import Box from "@material-ui/core/Box";
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
    color: "#eec47c",
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
    width: "150px",
    flexGrow: 1,
    textAlign: "left",
    fontFamily: "Leckerli One",
    //color: "#235e1b",
    color: "#eec47c",
    fontSize: "42px",
  },
  toolbarTitleResp: {
    width: "100%",
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
  navBar: {
    width: "600px",
    textAlign: "right",
  },
  navHide: {
    //display: "none",
  },
}));

export default function ButtonAppBar({
  currentUser,
  handleLogIn,
  handleLogout,
  backHome,
  goToCart,
}) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px");

  const cartx = useContext(CartContext);

  return (
    <Container className={classes.root}>
      <AppBar position="absolute" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Box>
            <Box className={matches ? classes.logo : classes.logoResp}></Box>
            <Typography
              color="inherit"
              //noWrap
              className={
                matches ? classes.toolbarTitle : classes.toolbarTitleResp
              }
            >
              Los Girasoles
            </Typography>
          </Box>
          <Box className={matches ? classes.navBar : classes.navHide}>
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
                {!currentUser.id ? "Iniciar Sesion" : null}
              </Button>
            ) : null}

            <Link
              variant="button"
              color="inherit"
              className={classes.link}
              onClick={() => {
                goToCart();
              }}
            >
              <ShoppingCartOutlinedIcon
                fontSize="large"
                style={{ verticalAlign: "middle" }}
              />
              <span style={{ verticalAlign: "middle" }}>
                ({cartx.cartItemsCount})
              </span>
            </Link>
            <IconButton
              //edge="start"
              className={
                matches ? classes.menuButtonHide : classes.menuButtonDisplay
              }
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon></MenuIcon>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
