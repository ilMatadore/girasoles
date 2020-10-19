import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext/cartContext2.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Image5 from "../../images/inigo.jpg";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { useHistory } from "react-router-dom";

import Container from "@material-ui/core/Container";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import CloseIcon from "@material-ui/icons/Close";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  "@global": {
    // button: {
    //   width: "50%",
    //   height: "40px",
    //   fontSize: "20px",
    // },
    // td: {
    //   paddingTop: "10px",
    // },
  },

  cartDropDown: {
    marginTop: "200px",
    //position: "absolute",
    width: "70%",
    //height: "340px",
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    // border: "1px solid black",
    backgroundColor: "white",
    //top: "90px",
    right: "40px",
    //zIndex: 5,
    fontSize: "15px",
    color: "black",
    borderRadius: "5px",
  },
  cartHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartItem: {
    display: "flex",
    fontSize: "15px",
    marginTop: "10px",
    justifyContent: "space-between",
    color: "black",
  },
  cartTotals: {
    display: "flex",
    fontSize: "15px",
    justifyContent: "flex-end",
    fontWeight: 600,
    marginTop: "5px",
    color: "black",
  },
  cartButton: {
    alignItems: "flex-end",
    marginBottom: 0,
    height: "10%",
    color: "black",
    alignContent: "center",
  },
  blueTable: {
    width: "100%",
    fontSize: "16px",
  },
  scrollbar: {
    height: "80%",
    //overflow: "scroll",
    width: "100%",
    overflowX: "hidden",
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#F5F5F5",
      outline: "1px solid #555555",
    },
  },
  table: {
    minWidth: 400,
    maxWidth: "85%",
    margin: "50px auto",
  },
  cartDesktop: {
    margin: "25px auto",
    width: "50%",
    // maxHeigth: "850px",
  },
  cartMobile: {
    width: "100%",
    margin: "25px auto",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Cart = () => {
  const classes = useStyles();
  const history = useHistory();
  const matches = useMediaQuery("(min-width:960px");

  const ctx = useContext(CartContext);

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${Image5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        //height: "100vh",
        verticalAlign: "center",
        display: "flex",
        height: "100vh",
      }}
    >
      <Box
        component="div"
        m={1}
        className={matches ? classes.cartDesktop : classes.cartMobile}
      >
        <TableContainer
          component={Paper}
          style={{
            // maxHeight: "850px",
            marginTop: "100px",
            borderRadius: "20px",
            height: "80%",
            
            
          }}
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Mi Carro
            </Typography>
          </div>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ fontSize: "20px" }}>
                  Producto
                </TableCell>
                <TableCell align="center" style={{ fontSize: "20px" }}>
                  Cantidad
                </TableCell>
                <TableCell align="right" style={{ fontSize: "20px" }}>
                  Precio
                </TableCell>
                <TableCell align="center" size="small"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ctx.cartItems.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan="3"
                    align="center"
                    style={{
                      fontSize: "20px",
                      padding: "100px"
                    }}
                  >
                    Su carro esta vacio
                  </TableCell>
                </TableRow>
              ) : (
                ctx.cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell style={{ textAlign: "left", fontSize: "16px" }}>
                      {item.title}
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", fontSize: "16px" }}
                    >
                      <span
                        style={{ cursor: "pointer", verticalAlign: "middle" }}
                        onClick={() => ctx.addItem(item)}
                      >
                        <ArrowDropUpIcon />
                      </span>{" "}
                      {item.quantity}{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          verticalAlign: "middle",
                          fontSize: "16px",
                        }}
                        onClick={() => ctx.removeItem(item)}
                      >
                        <ArrowDropDownIcon />
                      </span>
                    </TableCell>
                    <TableCell
                      style={{
                        textAlign: "right",
                        verticalAlign: "middle",
                        fontSize: "16px",
                      }}
                    >
                      ${item.price}
                    </TableCell>
                    <TableCell
                      size="small"
                      style={{ cursor: "pointer" }}
                      onClick={() => ctx.clearItemFromCart(item)}
                    >
                      <CloseIcon fontSize="small" />
                    </TableCell>
                  </TableRow>
                ))
              )}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell
                  style={{
                    fontSize: "16px",
                  }}
                >
                  Productos en el carro
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontSize: "16px",
                  }}
                >
                  {ctx.cartItemsCount}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  colSpan={1}
                  style={{
                    fontSize: "18px",
                    fontWeight: "900",
                  }}
                >
                  Total
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontSize: "18px",
                    fontWeight: "900",
                  }}
                >
                  ${ctx.cartTotal}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Paper
            elevation={0}
            style={{ margin: "20px auto", textAligned: "center" }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{
                lineHeight: "35px",
                cursor: "pointer",
                borderRadius: "20px",
                maxWidth: "250px",
              }}
              onClick={() => {
                history.push("/#canastas");
              }}
            >
              Agregar productos
            </Button>
            {"       "}
            <Button
              variant="contained"
              color="primary"
              style={{
                lineHeight: "35px",
                cursor: "pointer",
                borderRadius: "20px",
                maxWidth: "250px",
              }}
              onClick={() => {
                history.push("/checkout");
              }}
            >
              Comprar
            </Button>
          </Paper>
        </TableContainer>
      </Box>
    </Container>
  );
};
export default Cart;
