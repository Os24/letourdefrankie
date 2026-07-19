import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <Container>
        <Row>
          <Col>
            <h1 className="custom-title">ABOUT US</h1>
            <p className="about-us-copy">
              Le Tour de Frankie: El Infierno del Sur nace de la pasión por
              el ciclismo de ultra-distancia y el espíritu autosuficiente
              que define al bikepacking. Desde la Ciudad de México hasta
              Puerto Escondido, Oaxaca, reunimos cada año a una comunidad de
              corredores dispuestos a superar sus propios límites sobre dos
              ruedas, recorriendo carreteras abiertas, terracería y paisajes
              que atraviesan el corazón de México.
            </p>
            <p className="about-us-copy">
              Somos un evento gestionado por y para la comunidad ciclista,
              comprometidos con mantener la esencia autogestiva y el
              espíritu de compañerismo que ha caracterizado a Le Tour de
              Frankie desde sus inicios.
            </p>
            <p className="about-us-contact">
              <a
                href="https://www.instagram.com/letourdefrankie/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @letourdefrankie
              </a>
              {" · "}
              <a href="mailto:letourdefrankie@gmail.com">
                letourdefrankie@gmail.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
