import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import apiduraLogo from "../../images/apiduraLogo.svg";
import gangLogo from "../../images/thegang.svg";
import terremotoLogo from "../../images/terremoto.svg";
import ratzLogo from "../../images/ratz.svg";
import albaOpticsLogo from "../../images/alba.svg";
import setecientosLogo from "../../images/700mx.svg";
import bombardiersLogo from "../../images/bombardiers.svg";
import bikepantlaLogo from "../../images/bikephomet.png";
import stansLogo from "../../images/stans.svg";
import orbeaLogo from "../../images/orbea.svg";
import cushCoreLogo from "../../images/cushcore.svg";
import fmcLogo from "../../images/fmcOne.png";
import tentenpieLogo from "../../images/tentenpie.png";
import whlkngsLogo from "../../images/thewheelkngs.svg";
import ltdfOrbeaLogo from "../../images/ltdfOrbea.svg";
import ravenLogo from "../../images/raven.svg";
import hutchinsonLogo from "../../images/hutchinson.svg";

import "./Sponsors.css";

const Sponsors: React.FC = () => {
  return (
    <Container className="sponsors-container" fluid>
      <Row style={{ marginBottom: 20 }}>
        <div className="sponsors-title">
          <h2>FIRST UNASSISTED ULTRA CYCLING RACE IN MEXICO</h2>
        </div>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col className="d-flex justify-content-center align-items-center">
          <img
            src={ltdfOrbeaLogo}
            alt="ltdf-orbea"
            style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col className="d-none d-lg-block"></Col>
        <Col className="d-none d-lg-block"></Col>

        <Col className="logo">
          <img className="apidura" src={apiduraLogo} alt="apidura" />
        </Col>
        <Col className="named-sport-logo">
          <img src={stansLogo} alt="stans-mx" />
        </Col>
        <Col className="named-sport-logo">
          <img src={hutchinsonLogo} alt="hutchinson" />
        </Col>
        <Col className="named-sport-logo">
          <img src={ravenLogo} alt="raven" />
        </Col>
    
        <Col className="logo">
          <img src={tentenpieLogo} alt="tentenpie" />
        </Col>
          <Col className="named-sport-logo">
          <img className="alba-logo" src={albaOpticsLogo} alt="albaOptics" />
        </Col>
        {/* <Col className="logo">
          <img src={enbiciadosLogo} alt="thegang" />
        </Col> */}
        <Col className="d-none d-lg-block"></Col>
        <Col className="d-none d-lg-block"></Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        {/* <Col className="silver-logo">
          <img src={hutchinsonLogo} alt="hutchinson" />
        </Col> */}
        <Col className="silver-logo">
          <img src={bombardiersLogo} alt="bombardiers" />
        </Col>
        <Col className="silver-logo">
          <img src={fmcLogo} alt="fmc" />
        </Col>
        {/* <Col className="silver-logo">
          <img src={whlkngsLogo} alt="wheelkings" />
        </Col> */}
        {/* <Col className="silver-logo" >
          <img style={{width:100}} src={tentenpieLogo} alt="tentenpie" />
        </Col> */}
        <Col className="silver-logo">
          <img src={terremotoLogo} alt="terremotoCrew" />
        </Col>
        {/* <Col className="silver-logo">
          <img src={setecientosLogo} alt="setecientosmx" />
        </Col> */}
        {/* <Col className="silver-logo">
          <img src={rutasLogo} alt="rutas" />
        </Col>
        <Col className="silver-logo">
          <img src={mrBuenoLogo} alt="mrbueno" />
        </Col> */}
        {/* <Col className="silver-logo">
          <img src={chaakLogo} alt="chaakGear" />
        </Col>
        <Col className="silver-logo">
          <img src={chaakLogo} alt="cbd" />
        </Col> */}
        {/* <Col className="silver-logo">
          <img src={bikepantlaLogo} alt="bikePhomet" />
        </Col>
        <Col className="silver-logo">
          <img src={ravenLogo} alt="raven" />
        </Col> */}
      </Row>
    </Container>
  );
};

export default Sponsors;
