import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import CartReview from "../cartReview/cartReview";
import Image7 from "../../images/jens.jpg";
import Container from "@material-ui/core/Container";

import { CartContext } from "../../context/cartContext/cartContext2.jsx";
import { UserContext } from "../../context/userContext/userContext";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 950,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(16),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: "20px",
    maxHeight: "80vh",
    overflowY: "scroll",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(16),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      borderRadius: "20px",
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = [
  "Su Carro",
  "Direccion de Envio",
  "Detalle de Pago",
  "Confirmacion de Orden",
];

//const stepsResponsive = ["Carro", "Envio", "Pago", "Confirmar"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CartReview />;
    case 1:
      return <AddressForm />;
    case 2:
      return <PaymentForm />;
    case 3:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const cartContext = useContext(CartContext);
  const userContext = useContext(UserContext);

  console.log(cartContext.cartItems);
  console.log(userContext)
  

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePurchase = () => {
    console.log("compra");
    handleNext();
  }

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${Image7})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        //height: "100vh",
        verticalAlign: "center",
        display: "flex",
        height: "100vh",
      }}
    >
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              style={{ marginTop: "50px" }}
            >
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Muchas gracias por su pedido.
                  </Typography>
                  <Typography variant="subtitle1">
                    Su numero de orden es #2001539. Te hemos enviado un correo
                    con la confirmacion de la orden.
                  </Typography>
                  <Button variant="contained"
                  color="primary"                  
                  className={classes.button}>Inicio</Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={activeStep === steps.length - 1 ? handlePurchase : handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    </Container>
  );
}
