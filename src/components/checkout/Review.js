import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import { CartContext } from "../../context/cartContext/cartContext2.jsx";
import { UserContext } from "../../context/userContext/userContext";

// const products = [
//   { name: "Product 1", desc: "A nice thing", price: "$9.99" },
//   { name: "Product 2", desc: "Another thing", price: "$3.45" },
//   { name: "Product 3", desc: "Something else", price: "$6.51" },
//   { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
//   { name: "Shipping", desc: "", price: "Free" },
// ];

const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

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

function Review() {
  const classes = useStyles();

  const envio = 50;

  const cartContext = useContext(CartContext);
  const userContext = useContext(UserContext)
  
  const addresses = [
    userContext.address,
    userContext.city,
    userContext.postal,
    userContext.state,
    userContext.country,
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartContext.cartItems.map((product) => (
          <ListItem className={classes.listItem} key={product.id}>
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
          <ListItemText primary="Envio" />
          <Typography variant="subtitle1" className={classes.total}>
            ${envio}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${cartContext.cartTotal + envio}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{userContext.first_name} {userContext.last_name}</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Review;
