import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Image from "../../images/logo3.png";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";

import { CartContext } from "../../context/cartContext/cartContext2.jsx";
import { UserContext } from "../../context/userContext/userContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "60px",
    },
    display: "block",
    fontFamily: "Leckerli One",
    color: "#eec47c",
    fontSize: "30px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      height: "50px",
      width: "50px",
    },
    height: "90px",
    width: "90px",
    backgroundImage: `url(${Image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
  },

  appBar: {
    backgroundColor: "transparent",
    color: "white",
  },
}));

export default function Header2({
  //currentUser,
  //handleLogout,
  //handleProfile,
  handleLogIn,
  backHome,
  goToCart,
}) {
  const cartx = useContext(CartContext);
  const userCtx = useContext(UserContext);
  const hist = useHistory();

  const handleLogout = () => {
    userCtx.userLogout();
    hist.push("/");
  };

  const handleProfile = () => {
    hist.push(`/profile/${userCtx.id}`);
  };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {userCtx.id ? (
        <div>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              handleProfile();
            }}
          >
            Mi Perfil
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              handleLogout();
            }}
          >
            Cerrar Sesión
          </MenuItem>
        </div>
      ) : (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            handleLogIn();
          }}
        >
          Iniciar Sesión
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        onClick={() => {
          backHome();
          handleMenuClose();
        }}
      >
        <IconButton aria-label="show 4 new mails" color="inherit">
          <HomeIcon />
        </IconButton>
        <p>Inicio</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <InfoIcon />
        </IconButton>
        <p>Quienes Somos</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <MailIcon />
        </IconButton>
        <p>Contacto</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          goToCart();
          handleMenuClose();
        }}
      >
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={cartx.cartItemsCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Mi Carro</p>
      </MenuItem>
      {userCtx.id ? (
        <div>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>{userCtx.first_name}</p>
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              handleLogIn();
            }}
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Iniciar Sesion</p>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="absolute" elevation={0} className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Box className={classes.logo}></Box>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Los Girasoles
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => {
                backHome();
              }}
            >
              <HomeIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <InfoIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <MailIcon fontSize="large" />
            </IconButton>

            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => {
                goToCart();
              }}
            >
              <Badge badgeContent={cartx.cartItemsCount} color="secondary">
                <ShoppingCartIcon fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Badge
                badgeContent={
                  userCtx.id
                    ? `${userCtx.first_name[0]}${userCtx.last_name[0]}`
                    : null
                }
                color="primary"
              />
              <AccountCircle fontSize="large" />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={cartx.cartItemsCount} color="secondary">
                <MoreIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
