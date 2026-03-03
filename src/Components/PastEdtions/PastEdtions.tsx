import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Image,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import southHell from "../../../src/images/infiernodelsur.svg";
import "./PastEditions.css";

const PastEditions: React.FC = () => {
  const [cat, setCat] = useState([]);
  const maleParticipants = [
    {
      position: "1",
      name: "Sebastian Antonio Miranda Escamilla",
      finishTime: "55 hrs 58 mins",
      distance: "787.70 KM",
      badge: "\u{1F947}",
    },
    {
      position: "2",
      name: "Abraham Eriberto Gonzalez Ruiz",
      finishTime: "62 hrs 4 mins",
      distance: "787.70 KM",
      badge: "\u{1F948}",
    },
    {
      position: "3",
      name: "Sergio Krasowsky",
      finishTime: "62 hrs 53 mins",
      distance: "787.70 KM",
      badge: "\u{1F949}",
    },
    {
      badge: "4",
      name: "Ivan Alberto Sandoval Hernandez",
      finishTime: "66 hrs 40 mins",
      distance: "787.70 KM",
    },
    {
      badge: "5",
      name: "Mauricio Centeno Lara",
      finishTime: "66 hrs 40 mins",
      distance: "787.70 KM",
    },
    {
      badge: "6",
      name: "Juan Sanguineti",
      finishTime: "	68 hrs 48 mins",
      distance: "787.70 KM",
    },
    {
      badge: "7",
      name: "Allan Shaw",
      finishTime: "69 hrs 8 mins",
      distance: "787.70 KM",
    },
    {
      badge: "8",
      name: "Cooper Ray",
      finishTime: "78 hrs 12 mins",
      distance: "787.70 KM",
    },
    {
      badge: "9",
      name: "Moctezuma Martinez Yanez",
      finishTime: "84 hrs 7 mins",
      distance: "787.70 KM",
    },
    {
      badge: "10",
      name: "Paco Zarza",
      finishTime: "86 hrs 31 mins",
      distance: "787.70 KM",
    },
    {
      badge: "11",
      name: "Noah Nunez Grass",
      finishTime: "104 hrs 18 mins",
      distance: "787.70 KM",
    },
    {
      badge: "12",
      name: "Alberto Ruiz Corral",
      finishTime: "108 hrs 28 mins",
      distance: "787.70 KM",
    },
    {
      badge: "13",
      name: "Raymundo Julian Rosas Villicana",
      finishTime: "	108 hrs 50 mins",
      distance: "787.70 KM",
    },
    {
      badge: "14",
      name: "Omar Olivares",
      finishTime: "110 hrs",
      distance: "787.70 KM",
    },
    {
      badge: "DNF",
      name: "Nelson Rafael Chavez Sanchez",
      finishTime: "--",
      distance: "787.70 KM",
    },
    {
      badge: "DNF",
      name: "Osvaldo Serrano",
      finishTime: "--",
      distance: "787.70 KM",
    },
    {
      badge: "DNF",
      name: "Rafael Cruz Urvina",
      finishTime: "--",
      distance: "784.47 KM",
    },
    {
      badge: "DNF",
      name: "Alan Marin Luna",
      finishTime: "--",
      distance: "743.51 KM",
    },
    {
      badge: "DNF",
      name: "Allan Couttolenc Maldonado",
      finishTime: "--",
      distance: "740.91 KM",
    },
    {
      badge: "DNF",
      name: "Alejandro Feria Sanchez",
      finishTime: "--",
      distance: "656.68 KM",
    },
    {
      badge: "DNF",
      name: "Rodrigo Alegre Guerrero",
      finishTime: "--",
      distance: "638.66 KM",
    },
    {
      badge: "DNF",
      name: "Daniel Sanchez",
      finishTime: "--",
      distance: "617.17 KM",
    },
    {
      badge: "DNF",
      name: "Flaif Enrique llerena Rosas",
      finishTime: "--",
      distance: "472.16 KM",
    },
    {
      badge: "DNF",
      name: "Daniel Colmenares Porras",
      finishTime: "--",
      distance: "462.35 KM",
    },
    {
      badge: "DNF",
      name: "Mario E Fuente Cid",
      finishTime: "--",
      distance: "439.20 KM",
    },
    {
      badge: "DNF",
      name: "Abraham Ale Sleman Reynoso",
      finishTime: "--",
      distance: "414.54 KM",
    },
    {
      badge: "DNF",
      name: "Gustavo Adolfo Ruiz Galeano",
      finishTime: "--",
      distance: "254.40 KM",
    },
    {
      badge: "DNF",
      name: "Daniel Naim Garcia Carranza",
      finishTime: "--",
      distance: "72.12 KM",
    },
  ];
  const femaleParticipants = [
    {
      position: "1",
      name: "Lucelia Castillejos Alvarez",
      finishTime: "71 hrs 45 mins",
      distance: "787.70 KM",
      badge: "\u{1F947}",
    },
    {
      position: "2",
      name: "Zaira Contreras Escamilla",
      finishTime: "99 hrs 12 mins",
      distance: "787.70 KM",
      badge: "\u{1F948}",
    },
    {
      position: "3",
      name: "Silvia Franco Contreras",
      finishTime: "116 hrs 20 mins",
      distance: "787.70 KM",
      badge: "DNF",
    },
    {
      badge: "DNF",
      name: "Edna Gonzalez Gutierrez",
      finishTime: "--",
      distance: "518.38 KM",
    },
    {
      badge: "DNF",
      name: "Marisol Reyes",
      finishTime: "--",
      distance: "376.42 KM",
    },
    {
      badge: "DNF",
      name: "Brenda Anel Zamora Flores",
      finishTime: "--",
      distance: "251.23 KM",
    },
    {
      badge: "DNF",
      name: "Suyong Sofia Kim Vazquez",
      finishTime: "--",
      distance: "174.96 KM",
    },
  ];

  const doublesParticipants = [
    {
      position: "1",
      name: "Tellez & Miranda",
      finishTime: "66 hrs 37 mins",
      distance: "787.70 KM",
      badge: "\u{1F947}",
    },
    {
      position: "2",
      name: "Montes de Oca & Lopez",
      finishTime: "72 hrs 5 mins",
      distance: "787.70 KM",
      badge: "\u{1F948}",
    },
    {
      position: "3",
      name: "Mireles & Contreras",
      finishTime: "	82 hrs 47 mins",
      distance: "787.70 KM",
      badge: "\u{1F949}",
    },
    {
      badge: "4",
      name: "Camacho & Gonzalez",
      finishTime: "84 hrs 9 mins",
      distance: "787.70 KM",
    },
    {
      badge: "5",
      name: "Perez & Martinez",
      finishTime: "89 hrs 45 mins",
      distance: "376.42 KM",
    },
    {
      badge: "6",
      name: "Cuecuecha & Montes",
      finishTime: "105 hrs 19 mins",
      distance: "787.70 KM",
    },
    {
      badge: "DNF",
      name: "Gutierrez & Rangel",
      finishTime: "116 hrs 19 mins",
      distance: "787.70 KM",
    },
    {
      badge: "DNF",
      name: "Cardenaz & Gonzalez",
      finishTime: "--",
      distance: "787.70 KM",
    },
    {
      badge: "DNF",
      name: "Sanchez & Hernandez",
      finishTime: "--",
      distance: "518.16 KM",
    },
    {
      badge: "DNF",
      name: "Castellanos & Castellanos",
      finishTime: "--",
      distance: "459.74 KM",
    },
    {
      badge: "DNF",
      name: "Mendoza & Martinez",
      finishTime: "--",
      distance: "414.42 KM",
    },
    {
      badge: "DNF",
      name: "Velasco & Campos ",
      finishTime: "--",
      distance: "414.42 KM",
    },
    {
      badge: "DNF",
      name: "Gutierrez & Garcia",
      finishTime: "--",
      distance: "178.79 KM",
    },
  ];
  const handleSelect = (e) => {
    if (e === "maleParticipants") {
      setCat(maleParticipants);
    }
    if (e === "femaleParticipants") {
      setCat(femaleParticipants);
    }
    if (e === "doublesParticipants") {
      setCat(doublesParticipants);
    }
  };
  return (
    <div className="past-editions-container">
      <Container>
        <Row>
          <Image src={southHell} fluid />;
        </Row>
        <Row>
          <iframe
            style={{ width: "1200px", height: "500px", border: "none" }}
            src="https://www.youtube.com/embed/g1xokBUgpS4?si=AQ5QMTL-fUSmp8jA?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Row>
        <Row>
          <div className="info-container">
            <ul>
              <li>April 28th 2023</li>
              <li>4 checkpoints along the race</li>
              <li>Livetracking</li>
              <li>110 hours to complete the course</li>
              <li>Unassisted and self sufficient</li>
            </ul>
          </div>
        </Row>
        <Row>
          <h1 className="custom-title">ROUTE</h1>
          <iframe
            src="https://www.followmychallenge.com/live/le_tour_de_frankie/?iframe"
            style={{ width: "900px", height: "500px", border: "none" }}
          ></iframe>
        </Row>
        <Row>
          <Col>
            {" "}
            <h1 className="custom-title">RESULTS</h1>
            <div className="btn-container">
              <DropdownButton
                title="CATEGORY"
                id="dropdown-menu-align-right"
                variant="dark"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="femaleParticipants">
                  Female
                </Dropdown.Item>
                <Dropdown.Item eventKey="maleParticipants">Male</Dropdown.Item>
                <Dropdown.Item eventKey="doublesParticipants">
                  Doubles
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="table-container">
              <Table responsive striped bordered hover variant="dark" size="sm">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Distance</th>
                    <th>Finish Time</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.map((participant, index) => {
                    return (
                      <tr key={Math.random()}>
                        <td key={Math.random()}>{participant.badge}</td>
                        <td key={Math.random()}>{participant.name}</td>
                        <td key={Math.random()}>{participant.distance}</td>
                        <td key={Math.random()}>{participant.finishTime}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PastEditions;
