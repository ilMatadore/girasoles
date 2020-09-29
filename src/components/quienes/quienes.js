import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "material-ui-image";

//import tileData from "./tileData";
import Container from "@material-ui/core/Container";

import Image9 from "../../images/nathan-dumlao-m6DAgQyxjAo-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  root2: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  paper: {
    margin: theme.spacing(12, 0, 4, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Contact() {
  //const classes = useStyles();

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${Image9})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxHeight: "200vh",
        verticalAlign: "center",
        display: "flex",
      }}
    >
      <Container
        maxWidth="l"
        component="div"
        style={{
          height: "100vh",
          display: "block",
          marginTop: "120px",
          color: "black",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
      >
        <div style={{ width: "100%", textAlign: "left" }}>
          <h2>Quienes somos</h2>
          <p>
            Somos agricultores orgánicos de Sauce y somos los responsables de
            todo el proceso productivo de las hortalizas que ofrecemos. Basamos
            nuestra forma de producción en principios Agroecológicos que
            fomentan el cuidado de los recursos naturales, respetando y
            promoviendo la biodiversidad.
          </p>
          <p>
            Nuestras huertas están ubicadas a pocos kilómetros de la Ciudad de
            Sauce. Desde el año 2013 estamos llevando adelante este
            emprendimiento familiar, que es para nosotros una forma de vida y de
            vinculación con la naturaleza. Además es una herencia de lo que
            nuestros padres y abuelos hacían, recuperando tradiciones y
            prácticas ancestrales.Practicamos una agricultura responsable que
            preserva los recursos naturales y cuida la biodiversidad, reduciendo
            la erosión y la contaminación de suelo y agua.Rechazamos la
            utilización de herbicidas, fertilizantes e insecticidas sintéticos.
          </p>
        </div>
        <div style={{ width: "100%", textAlign: "left" }}>
          <h2>Nuestra Vision</h2>
          <p>
            La agricultura convencional no reconoce ni paga sus costos
            verdaderos, los recursos no renovables son usados para sostener las
            cosechas. La tierra está siendo gravemente erosionada por los
            procesos de arado extensivo, el suelo y el agua son contaminados con
            químicos, esto está destruyendo nuestro mundo y a nosotros
            mismos.Estos sistemas disminuyen la biodiversidad y agravan los
            problemas vinculados al cambio climático.Los beneficios económicos
            sustentan este tipo de agricultura, sin embargo la concentración de
            la producción, procesamiento y distribución en cada vez menos manos
            tiene como consecuencia la expulsión de agricultores familiares del
            medio rural.Creemos que enfoques como la Permacultura y sistemas de
            producción agroecológicos abren camino hacia una sociedad
            sustentable que trabaje con la naturaleza más que en contra de ella.
          </p>
        </div>
      </Container>
    </Container>
  );
}
