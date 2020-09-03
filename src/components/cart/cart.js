import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext/cartContext";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "@global": {
    button: {
      width: "100%",
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
    padding: "20px",
    border: "1px solid black",
    backgroundColor: "white",
    top: "90px",
    right: "40px",
    zIndex: 5,
    fontSize: "15px",
    color: "black",
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
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 0,
    height: "10%",
    color: "black",
  },
  blueTable: {
    width: "100%",
    fontSize: "16px",
  },
}));

const Cart = () => {
  const classes = useStyles();
  const history = useHistory();

  const ctx = useContext(CartContext);

  function totalPrice(items) {
    if (items.length === 0) {
      return 0;
    } else {
      return items.reduce(
        (acc, item) => acc + item[0].quantity * item[0].price,
        0
      );
    }
  }
  return (
    <div className={classes.cartDropDown}>
      <div style={{ height: "60%" }}>
        <table className={classes.blueTable}>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Producto</th>
              <th style={{ textAlign: "center" }}>Cantidad</th>
              <th style={{ textAlign: "right" }}>Precio</th>
            </tr>
          </thead>
          <tbody>
            {ctx.cart.length === 0 ? (
              <tr style={{ lineHeight: "150px" }}>
                <td colSpan="3">Su carro esta vacio</td>
              </tr>
            ) : (
              ctx.cart.map((item) => (
                <tr key={item[0].id}>
                  <td style={{ textAlign: "left" }}>{item[0].title}</td>
                  <td style={{ textAlign: "center" }}>
                    + {item[0].quantity} -
                  </td>
                  <td style={{ textAlign: "right" }}>{item[0].price}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <br />
      <div style={{ height: "30%" }}>
        <div className={classes.cartTotals}>
          Productos en el carro : {ctx.totalItems(ctx.cart)}
        </div>
        <div className={classes.cartTotals}>
          Precio Total : ${totalPrice(ctx.cart)}
        </div>
      </div>
      <div className={classes.cartButton} style={{ height: "10%" }}>
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "#235e1b",
            color: "yellow",
          }}
          onClick={() => history.push("/checkout")}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
export default Cart;
