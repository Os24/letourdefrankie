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
import whlkngsLogo from "../../images/thewheelkngs.svg"

import "./Sponsors.css";

const Sponsors: React.FC = () => {
  return (
    <Container className="sponsors-container" fluid>
      <Row style={{ marginBottom: 20 }}>
        <div className="sponsors-title">
          <h6>#LETOURDEFRANKIE</h6>
          <h2>FIRST UNASSISTED ULTRA CYCLING RACE IN MEXICO</h2>
        </div>
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
          <img  src={orbeaLogo} alt="orbea" />
        </Col>
        <Col className="named-sport-logo">
          <img  src={cushCoreLogo} alt="cushCore" />
        </Col>

        {/* <Col className="logo">
          <img src={gangLogo} alt="thegang" />
        </Col>
        <Col className="logo">
          <img src={enbiciadosLogo} alt="thegang" />
        </Col> */}
        <Col className="d-none d-lg-block"></Col>
        <Col className="d-none d-lg-block"></Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col className="silver-logo">
          <img src={albaOpticsLogo} alt="albaoptics" />
        </Col>
        <Col className="silver-logo">
          <img src={bombardiersLogo} alt="bombardiers" />
        </Col>
        <Col className="silver-logo">
          <img src={fmcLogo} alt="fmc" />
        </Col>
        <Col className="silver-logo">
          <img src={whlkngsLogo} alt="wheelkings" />
        </Col>
        <Col className="silver-logo" >
          <img style={{width:100}} src={tentenpieLogo} alt="tentenpie" />
        </Col>
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
        <Col className="silver-logo">
          <img src={bikepantlaLogo} alt="bikePhomet" />
        </Col>
        {/* <Col className="silver-logo">
          <img src={tempeLogo} alt="bikePhomet" />
        </Col> */}
      </Row>
    </Container>
  );
};

export default Sponsors;
