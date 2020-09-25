import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import CartReview from "../cartReview/cartReview";
import Image7 from "../../images/markus-spiske-7OBJS-2CgHk-unsplash.jpg";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "100px",
    marginBottom: "50px",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
    borderRadius: "20px",
  },
}));

function getSteps() {
  return [
    "Su Carro",
    "Direccion de Envio",
    "Detalle de Pago",
    "Confirmacion de Orden",
  ];
}

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
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //   const handleReset = () => {
  //     setActiveStep(0);
  //   };

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${Image7})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        maxHeight: "200vh",
        verticalAlign: "center",
        display: "flex",
      }}
    >
      <div className={classes.root}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          style={{ borderRadius: "20px" }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography variant="h5" gutterBottom>
              Muchas gracias por su pedido.
            </Typography>
            <Typography variant="subtitle1">
              Su numero de orden es #2001539. Te hemos enviado un correo con la
              confirmacion de la orden.
            </Typography>
          </Paper>
        )}
      </div>
    </Container>
  );
}
