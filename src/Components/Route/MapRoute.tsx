import * as React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./MapRoute.css";
import fmcLogo from "../../images/fmcTwo.png";

const MapRoute: React.FC = () => {
  return (
    <>
      <div className="map-route-container">
        <Row className="custom-row">
          <Col className="d-none d-lg-block"></Col>
          <Col>
            {" "}
            <div className="iframe-container">
              {" "}
              <iframe
                src="https://www.followmychallenge.com/live/le_tour_de_frankie/?iframe"
                style={{ width: "500px", height: "500px", border: "none" }}
              ></iframe>
              <br></br>
              <br></br>
              <Button
                href="https://drive.google.com/file/d/1g9QYPQAF3BJJ3ZZd7q7wT0YPPovAFFyO/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                DOWNLOAD THE ROUTE
              </Button>
            </div>
          </Col>
          <Col>
            <div className="route-text-container">
              <h2>THE ROUTE</h2>
              <ul>
                <li>About 8OOkm +12000m elevation</li>
                <li>4 checkpoints along the race</li>
                <li>Livetracking</li>
                <li>110 hours to complete the course</li>
                <li>Unassisted and self sufficient</li>
              </ul>
              <Col className="logo">
                <img src={fmcLogo} alt="thegang" />
              </Col>
            </div>
          </Col>
          <Col className="d-none d-lg-block"></Col>
        </Row>
      </div>
    </>
  );
};

export default MapRoute;
