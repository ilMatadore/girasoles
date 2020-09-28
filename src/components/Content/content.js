import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Image from "../../images/marisol-benitez-QvkAQTNj4zk-unsplash.jpg";
import Image2 from "../../images/ja-ma--gOUx23DNks-unsplash.jpg";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import AOS from "aos";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { CartContext } from "../../context/cartContext/cartContext2.jsx";
//import Image10 from "../../images/vegetables.png";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 4, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light" ? "#004643" : theme.palette.grey[700],
    color: "#fffffe",
    // borderTopLeftRadius: "20px",
    // borderTopRightRadius: "20px",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#abd1c6",
    verticalAlign: "middle",
    marginTop: "5px",
    backgroundColor: "#004643",

    borderRadius: "20px",
  },

  paper2: {
    verticalAlign: "middle",
    marginTop: "10px",
    display: "block",
    backgroundColor: "transparent",
  },

  cardAddItem: {
    borderRadius: "20px",
    width: "60px",
    height: "60px",
    backgroundColor: "#f9bc60",
    color: "#001e1d",
    "&:hover": {
      backgroundColor: "yellow",
      color: "#235e1b",
      boxShadow: "0 0 15px #666666",
    },
  },
  additionalAdd: {
    borderRadius: "20px",
    //height: "60px",
    color: "#004643",

    backgroundColor: "#f9bc60",
    "&:hover": {
      backgroundColor: "#f9bc00",
      color: "#235e1b",
      boxShadow: "0 0 15px #666666",
    },
  },
  homeBox: {
    color: "white",
    height: "100vh",
    width: "40%",
    margin: "auto",
    paddingTop: "250px",
  },
  homeBoxResp: {
    color: "white",
    height: "100vh",
    width: "70%",
    margin: "auto",
    paddingTop: "200px",
  },
  homeBoxText: {
    color: "white",
    fontFamily: "Leckerli",
    fontSize: "75px",
  },
  homeBoxTextResp: {
    color: "white",
    fontFamily: "Leckerli",
    fontSize: "50px",
    paddingBottom: "100px",
  },
}));

const tiers = [
  {
    title: "Mix Verdura",
    id: 1,
    price: "800",
    description: [
      "zapallo cabutia - 1",
      "papa - 1 kg",
      "boniato - 1 kg",
      "atado de verdeo - 1",
    ],
    buttonText: "Agregar al carro",
    buttonVariant: "contained",
  },
  {
    title: "Mix Verde",
    id: 2,
    subheader: "La mas vendida",
    price: "900",
    description: [
      "atado de acelga - 1",
      "lechuga - 1",
      "atado de rúcula - 1",
      "atado espinaca - 1",
    ],
    buttonText: "Agregar al carro",
    buttonVariant: "contained",
  },
  {
    title: "Mix Todo",
    id: 3,
    price: "1000",
    description: [
      "zapallo cabutia - 1",
      "papa - 1.5 kg ",
      "atado de verdeo - 1",
      "mandarina - 1 kg",
    ],
    buttonText: "Agregar al carro",
    buttonVariant: "contained",
  },
];

const adicionales = [
  {
    title: "Miel",
    id: 4,
    price: "100",
    description: ["1/2 kg Organica"],
    buttonText: "Agregar al carro",
    buttonVariant: "contained",
  },
  {
    title: "Mizuna",
    id: 5,
    price: "45",
    description: [],
    buttonText: "Agregar al carro",
    buttonVariant: "contained",
  },
  {
    title: "Mostaza",
    id: 6,
    price: "45",
    description: [],
    buttonText: "Agregar al carro",
    buttonVariant: "contained",
  },
  {
    title: "Kale",
    id: 7,
    price: "55",
    description: [],
    buttonText: "Agregar al carro",
    buttonVariant: "contained",
  },
  {
    title: "Cilantro",
    id: 8,
    price: "45",
    description: [],
    buttonText: "Agregar al carro",
    buttonVariant: "contained",
  },
  {
    title: "Perejil",
    id: 9,
    price: "45",
    description: [],
    buttonText: "Agregar al carro",
    buttonVariant: "contained",
  },
];

export default function Pricing({ goToCart }) {
  const matches = useMediaQuery("(min-width:960px)");
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 1000,
    });
  }, []);

  const classes = useStyles();

  const cartCtx = useContext(CartContext);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        style={{
          // height: "100vh",
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxHeight: "200vh",
        }}
      >
        <Box
          component="div"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          className={matches ? classes.homeBox : classes.homeBoxResp}
        >
          <Typography
            className={matches ? classes.homeBoxText : classes.homeBoxTextResp}
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            data-aos="zoom-out"
          >
            Productos Orgánicos<br></br>de Nuestra Tierra a tu Hogar
          </Typography>
          <Button
            variant="contained"
            //color="primary"
            href="#canastas"
            style={{
              lineHeight: "35px",
              cursor: "pointer",
              borderRadius: "20px",
              maxWidth: "250px",
              backgroundColor: "#e16162",
              color: "#f9bc60",
            }}
          >
            Hace tu pedido
          </Button>
        </Box>
      </Container>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          id="canastas"
          component="h3"
          variant="h3"
          align="center"
          //color="textPrimary"
          gutterBottom
          style={{ color: "#001e1d" }}
        >
          Nuestras Canastas
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
          style={{ color: "#0f3433" }}
        >
          Selecciona primero una o mas de nuestras canastas de productos
          organicos que mas gustes...
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              data-aos="zoom-in"
              item
              key={tier.title}
              xs={9}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
              style={{
                margin: "auto",
              }}
            >
              <Card style={{ borderRadius: "20px" }}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                    color: "#e16162",
                  }}
                  action={
                    tier.title === "Mix Verde" ? (
                      <StarIcon style={{ color: "#e16162" }} />
                    ) : null
                  }
                  className={classes.cardHeader}
                />
                <CardContent
                  style={{
                    backgroundColor: "#D6E2B6",
                    //   backgroundImage: `url(${Image10})`,
                    //   backgroundSize: "contain",
                    //   backgroundPosition: "center",
                    //   backgroundRepeat: "no-repeat",
                    //   backgroundOrigin: "content-box",
                  }}
                >
                  <div className={classes.cardPricing}>
                    <Typography
                      component="h2"
                      variant="h3"
                      style={{ color: "#004643" }}
                    >
                      ${tier.price}
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ color: "#004643" }}
                    ></Typography>
                  </div>
                  <ul
                    style={{
                      // backgroundColor: "black",
                      // opacity: "20%",
                      //borderRadius: "20px",
                      textTransform: "capitalize",
                      fontWeigth: "900",
                    }}
                  >
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="h6"
                        align="center"
                        key={line}
                        style={{
                          color: "#004643",
                          fontWeigth: "900",
                        }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions
                  style={{
                    display: "block",
                    backgroundColor: "#D6E2B6",
                  }}
                >
                  <Button
                    variant="contained"
                    href="#canastas"
                    style={{
                      lineHeight: "35px",
                      cursor: "pointer",
                      borderRadius: "20px",
                      width: "100px",
                      color: "#001e1d",
                      backgroundColor: "#f9bc60",
                    }}
                    //className={classes.cardAddItem}
                    //variant={tier.buttonVariant}
                    onClick={() => {
                      cartCtx.addItem(tier);
                    }}
                  >
                    {" "}
                    <AddShoppingCartIcon fontSize="medium" />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
          style={{ marginBottom: "20px", color: "#0f3433" }}
        >
          Tambien puedes agregar los siguientes productos a tu pedido..
        </Typography>
        <Grid variant="outlined">
          {adicionales.map((item) => (
            <Grid container spacing={2}>
              <Grid item xs={12} data-aos="fade-up">
                <Paper className={classes.paper}>
                  <Typography component="a" variant="h6">
                    {item.title}
                  </Typography>{" "}
                  <Typography component="a" variant="a">
                    {item.description}
                  </Typography>
                  <span
                    style={{
                      float: "right",
                    }}
                  >
                    <Typography
                      component="a"
                      variant="h6"
                      style={{ paddingRight: "10px" }}
                    >
                      ${item.price}
                    </Typography>

                    <Button
                      data-aos="fade-up"
                      className={classes.additionalAdd}
                      variant={item.buttonVariant}
                      onClick={() => {
                        cartCtx.addItem(item);
                      }}
                    >
                      <AddShoppingCartIcon fontSize="medium" />
                    </Button>
                  </span>
                </Paper>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container>
        <Button
          variant="contained"
          color="primary"
          align="center"
          component="button"
          style={{
            lineHeight: "35px",
            cursor: "pointer",
            borderRadius: "20px",
            maxWidth: "250px",
            backgroundColor: "#e16162",
            color: "#f9bc60",
          }}
          onClick={() => {
            goToCart();
          }}
        >
          Finalizar compra{" "}
        </Button>
      </Container>

      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
          style={{
            lineHeight: "100px",
          }}
        >
          Seguinos en{" "}
          <InstagramIcon fontSize="large" style={{ verticalAlign: "middle" }} />
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
          style={{
            lineHeight: "100px",
          }}
        >
          Por consultas{" "}
          <WhatsAppIcon fontSize="large" style={{ verticalAlign: "middle" }} />
        </Typography>
      </Container>
      <Container
        maxWidth="xl"
        style={{
          marginTop: "50px",
          backgroundImage: `url(${Image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      ></Container>
    </React.Fragment>
  );
}
