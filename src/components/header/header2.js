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

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    [theme.breakpoints.up("md")]: {
      fontSize: "60px",
    },
    display: "block",
    fontFamily: "Leckerli One",
    color: "#f9bc60",
    fontSize: "36px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    [theme.breakpoints.up("md")]: {
      height: "60px",
      width: "60px",
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
  MuiMenu: {
    backgroundColor: "#abd1c6",
  },
}));

export default function Header2({
  //currentUser,
  //handleLogout,
  //handleProfile,
  handleLogIn,
  backHome,
  goToCart,
  history,
  goToContact,
  goToQuienes,
}) {
  const cartx = useContext(CartContext);
  const userCtx = useContext(UserContext);

  const handleLogout = () => {
    userCtx.userLogout();
    history.push("/");
  };

  const handleProfile = () => {
    history.push(`/profile/${userCtx.id}`);
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
        <div style={{ backgroundColor: "#abd1c6" }}>
          <MenuItem
            style={{ backgroundColor: "#abd1c6" }}
            onClick={() => {
              handleMenuClose();
              handleProfile();
            }}
          >
            Mi Perfil
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#abd1c6" }}
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
        style={{ backgroundColor: "#abd1c6" }}
      >
        <IconButton aria-label="show 4 new mails" color="inherit">
          <HomeIcon style={{ color: "#004643" }} />
        </IconButton>
        <p>Inicio</p>
      </MenuItem>
      <MenuItem
        style={{ backgroundColor: "#abd1c6" }}
        onClick={() => {
          goToQuienes();
          handleMenuClose();
        }}
      >
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <InfoIcon style={{ color: "#004643" }} />
        </IconButton>
        <p>Quienes Somos</p>
      </MenuItem>
      <MenuItem
        style={{ backgroundColor: "#abd1c6" }}
        onClick={() => {
          goToContact();
          handleMenuClose();
        }}
      >
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <MailIcon style={{ color: "#004643" }} />
        </IconButton>
        <p>Contacto</p>
      </MenuItem>
      <MenuItem
        style={{ backgroundColor: "#abd1c6" }}
        onClick={() => {
          goToCart();
          handleMenuClose();
        }}
      >
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={cartx.cartItemsCount} color="secondary">
            <ShoppingCartIcon style={{ color: "#004643" }} />
          </Badge>
        </IconButton>
        <p>Mi Carro</p>
      </MenuItem>
      {userCtx.id ? (
        <div style={{ backgroundColor: "#abd1c6" }}>
          <MenuItem
            style={{ backgroundColor: "#abd1c6" }}
            onClick={handleProfileMenuOpen}
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle style={{ color: "#004643" }} />
            </IconButton>
            <p>{userCtx.first_name}</p>
          </MenuItem>
        </div>
      ) : (
        <div style={{ backgroundColor: "#abd1c6" }}>
          <MenuItem
            style={{ backgroundColor: "#abd1c6" }}
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
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => {
                goToQuienes();
                handleMenuClose();
              }}
            >
              <InfoIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => {
                goToContact();
                handleMenuClose();
              }}
            >
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
