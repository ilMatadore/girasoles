import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext/cartContext2.jsx";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  "@global": {
    button: {
      width: "50%",
      height: "40px",
      fontSize: "20px",
    },
    td: {
      paddingTop: "10px",
    },
  },
  emptyCart: {
    fontSize: "20px",
    margin: "50px auto",
    textAlign: "center",
    color: "black",
  },
  cartDropDown: {
    position: "absolute",
    width: "280px",
    height: "340px",
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    border: "1px solid black",
    backgroundColor: "white",
    top: "90px",
    right: "40px",
    zIndex: 5,
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
    overflow: "scroll",
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
}));

const Cart = ({ hideCart }) => {
  const classes = useStyles();
  const history = useHistory();

  const ctx = useContext(CartContext);

  return (
    <div className={classes.cartDropDown}>
      <div className={classes.scrollbar}>
        <table className={classes.blueTable}>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Producto</th>
              <th style={{ textAlign: "center" }}>Cantidad</th>
              <th style={{ textAlign: "right" }}>Precio</th>
              <th style={{ textAlign: "right" }}> </th>
            </tr>
          </thead>
          <tbody>
            {ctx.cartItems.length === 0 ? (
              <tr style={{ lineHeight: "120px" }}>
                <td colSpan="3">Su carro esta vacio</td>
              </tr>
            ) : (
              ctx.cartItems.map((item) => (
                <tr key={item.id}>
                  <td style={{ textAlign: "left" }}>{item.title}</td>
                  <td style={{ textAlign: "center" }}>
                    <span
                      style={{ cursor: "pointer", verticalAlign: "middle" }}
                      onClick={() => ctx.addItem(item)}
                    >
                      <ArrowDropUpIcon />
                    </span>{" "}
                    {item.quantity}{" "}
                    <span
                      style={{ cursor: "pointer", verticalAlign: "middle" }}
                      onClick={() => ctx.removeItem(item)}
                    >
                      <ArrowDropDownIcon />
                    </span>
                  </td>
                  <td style={{ textAlign: "right", verticalAlign: "middle" }}>
                    ${item.price}
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => ctx.clearItemFromCart(item)}
                  >
                    <CloseIcon fontSize="small" />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <br />
      <div style={{ height: "30%" }}>
        <div className={classes.cartTotals}>
          Productos en el carro : {ctx.cartItemsCount}
        </div>
        <div className={classes.cartTotals}>
          Precio Total : ${ctx.cartTotal}
        </div>
      </div>
      <div className={classes.cartButton} style={{ height: "10%" }}>
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "#235e1b",
            color: "yellow",
          }}
          onClick={() => {
            history.push("/checkout");
            hideCart();
          }}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
export default Cart;
