import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import { CartContext } from "../../context/cartContext/cartContext2.jsx";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: "700",
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function CartReview() {
  const classes = useStyles();

  const envio = 50;

  const context = useContext(CartContext);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {context.cartItems.map((product) => (
          <ListItem className={classes.listItem} key={product.key}>
            <ListItemText
              primary={product.title}
              secondary={`${product.description} `}
            />
            <Typography variant="body2">
              {" "}
              {product.quantity} X ${product.price}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Sub Total" className={classes.total} />
          <Typography variant="h5" className={classes.total}>
            ${context.cartTotal}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Envio" className={classes.total} />
          <Typography variant="h5" className={classes.total}>
            ${envio}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" className={classes.total} />
          <Typography variant="h5" className={classes.total}>
            ${context.cartTotal + envio}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}></Grid>
    </React.Fragment>
  );
}

export default CartReview;
