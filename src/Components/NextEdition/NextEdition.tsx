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
import mainImg from "../../../src/images/ltdf2024-1.jpg";
import Countdown from "react-countdown";
import { Helmet } from "react-helmet";

const NextEdition: React.FC = () => {
  const [cat, setCat] = useState([]);

  const maleParticipants = [
    {
      position: "\u{1F947}",
      raceNumber: "45",
      name: "Sidney Anthony Lewis",
      finishTime: "50 hrs 23 mins",
      distance: "789.36 KM",
      badge: 1,
    },
    {
      position: "\u{1F948}",
      raceNumber: "22",
      name: "Osvaldo serrano Camargo",
      finishTime: "62 hrs 31 mins",
      distance: "789.36 KM",
      badge: 2,
    },
    {
      position: "\u{1F949}",
      raceNumber: "020",
      name: "Mauricio Centeno Lara",
      finishTime: "62 hrs 34 mins",
      distance: "789.36 KM",
      badge: 3,
    },
    {
      position: "4",
      raceNumber: "42",
      name: "Mauricio Challu",
      finishTime: "62 hrs 34 mins",
      distance: "789.36 KM",
      badge: 4,
    },
    {
      position: "5",
      raceNumber: "33",
      name: "Abraham Gonzalez Ruiz",
      finishTime: "70 hrs 8 mins",
      distance: "789.36 KM",
      badge: 5,
    },
    {
      position: "DNF",
      raceNumber: "01",
      name: "Javier Juárez",
      finishTime: "DNF",
      distance: "392.08 KM",
      badge: 36,
    },
    {
      position: "26",
      raceNumber: "02",
      name: "Luis Alberto Mora",
      finishTime: "109 hrs 4 mins",
      distance: "789.36 KM",
      badge: 26,
    },
    {
      position: "21",
      raceNumber: "03",
      name: "Brad Sutton",
      finishTime: "98 hrs 45 mins",
      distance: "789.36 KM",
      badge: 21,
    },

    {
      position: "15",
      raceNumber: "05",
      name: "Rafael Torres Vargas",
      finishTime: "89 hrs 32 mins",
      distance: "789.36 KM",
      badge: 15,
    },
    {
      position: "14",
      raceNumber: "06",
      name: "Mario Uziel Reyes Vazquez",
      finishTime: "82 hrs 43 mins",
      distance: "789.36 KM ",
      badge: 14,
    },
    {
      position: "8",
      raceNumber: "07",
      name: "Nicolas Douek",
      finishTime: "74 hrs 11 mins",
      distance: "789.36 KM ",
      badge: 8,
    },
    {
      position: "DNF",
      raceNumber: "09",
      name: "Eduardo Rivero",
      finishTime: "DNF",
      distance: "378.16 KM",
      badge: 36,
    },
    {
      position: "DNF",
      raceNumber: "008",
      name: "Moctezuma Martinez",
      finishTime: "DNF",
      distance: "500.83 KM",
      badge: 34,
    },
    {
      position: "22",
      raceNumber: "11",
      name: "Marco Antonio Hernandez Carnalla",
      finishTime: "98 hrs 46 mins",
      distance: "789.36 KM",
      badge: 22,
    },
    {
      position: "19",
      raceNumber: "12",
      name: "Ro Alegre",
      finishTime: "91 hrs 40 mins",
      distance: "789.36 KM",
      badge: 19,
    },
    {
      position: "12",
      raceNumber: "13",
      name: "Raul Palma Martinez",
      finishTime: "74 hrs 13 mins",
      distance: "789.36 KM",
      badge: 12,
    },
    {
      position: "25",
      raceNumber: "14",
      name: "Juan Antonio Canseco Acosta",
      finishTime: "107 hrs 47 mins",
      distance: "789.36 KM",
      badge: 25,
    },
    {
      position: "DQ",
      raceNumber: "16",
      name: "Julian Navarro",
      finishTime: "DQ",
      distance: "789.36 KM",
      badge: 51,
    },
    {
      position: "16",
      raceNumber: "17",
      name: "Jaime Hector Castillo Montañez",
      finishTime: "89 hrs 35 mins",
      distance: "789.36 KM",
      badge: 16,
    },
    {
      position: "20",
      raceNumber: "18",
      name: "Oscar Lopez",
      finishTime: "95 hrs 34 mins",
      distance: "789.36 KM",
      badge: 20,
    },
    {
      position: "6",
      raceNumber: "19",
      name: "Alvaro Garcia Cordova",
      finishTime: "72 hrs 36 mins",
      distance: "789.36 KM",
      badge: 6,
    },
    {
      position: "DNF",
      raceNumber: "20",
      name: "Daniel Cervantes",
      finishTime: "DNF",
      distance: "309.41 KM ",
      badge: 37,
    },
    {
      position: "24",
      raceNumber: "21",
      name: "Eduardo Elizalde",
      finishTime: "102 hrs 33 mins",
      distance: "789.36 KM",
      badge: 24,
    },

    {
      position: "DQ",
      raceNumber: "23",
      name: "Alexander Krieger Garduño",
      finishTime: "DQ",
      distance: "789.36 KM",
      badge: 53,
    },
    {
      position: "DNF",
      raceNumber: "24",
      name: "Omar Olivares",
      finishTime: "DNF",
      distance: "519.81 KM",
      badge: 33,
    },
    {
      position: "DNF",
      raceNumber: "25",
      name: "Gerardo Gonzalez Garfias",
      finishTime: "DNF",
      distance: "539.10 KM",
      badge: 31,
    },
    {
      position: "10",
      raceNumber: "26",
      name: "Alejandro Gomez",
      finishTime: "74 hrs 12 mins",
      distance: "789.36 KM",
      badge: 10,
    },
    {
      position: "11",
      raceNumber: "27",
      name: "Roman Martinez",
      finishTime: "74 hrs 13 mins",
      distance: "789.36 KM",
      badge: 11,
    },
    {
      position: "DNF",
      raceNumber: "29",
      name: "Salvador Reyes Zuñiga",
      finishTime: "DNF",
      distance: "743.45 KM",
      badge: 30,
    },
    {
      position: "DNF",
      raceNumber: "30",
      name: "Jorge Alberto Soriano Diaz",
      finishTime: "DNF",
      distance: "	132.56 KM",
      badge: 49,
    },
    {
      position: "7",
      raceNumber: "32",
      name: "Neftali Donato",
      finishTime: "74 hrs 10 mins",
      distance: "789.36 KM ",
      badge: 7,
    },

    {
      position: "23",
      raceNumber: "34",
      name: "Yonatan Muniz Ascencio",
      finishTime: "99 hrs 57 mins",
      distance: "789.36 KM",
      badge: 23,
    },
    {
      position: "17",
      raceNumber: "35",
      name: "Daniel Sanchez",
      finishTime: "90 hrs 5 mins",
      distance: "789.36 KM",
      badge: 17,
    },
    {
      position: "18",
      raceNumber: "38",
      name: "Rafel Cruz Urvina",
      finishTime: "91 hrs 1 min",
      distance: "789.36 KM",
      badge: 18,
    },
    {
      position: "DNF",
      raceNumber: "39",
      name: "Fernando Trejo",
      finishTime: "DNF",
      distance: "180.39 KM",
      badge: 50,
    },
    {
      position: "DNF",
      raceNumber: "40",
      name: "Alejandro Saenz",
      finishTime: "DNF",
      distance: "180.39 KM",
      badge: 40,
    },
    {
      position: "27",
      raceNumber: "41",
      name: "Cooper Ray",
      finishTime: "133 hrs 2 mins",
      distance: "789.36 KM",
      badge: 27,
    },

    {
      position: "9",
      raceNumber: "43",
      name: "Jesus Esparza Gomez ",
      finishTime: "74 hrs 11 mins",
      distance: "789.36 KM",
      badge: 9,
    },

    {
      position: "DNF",
      raceNumber: "001",
      name: "Eduardo Guerrero Lopez",
      finishTime: "DNF",
      distance: "412.96 KM ",
      badge: 35,
    },
    {
      position: "13",
      raceNumber: "04",
      name: "Daniel Tovar",
      finishTime: "75 hrs 51 mins",
      distance: "789.36 KM",
      badge: 13,
    },
  ];

  const femaleParticipants = [
    {
      position: "\u{1F948}",
      raceNumber: "8",
      name: "Maria Fernanda Alva Fuentes",
      finishTime: "107 hrs 30 mins",
      distance: "789.36 KM",
      badge: 2,
    },
    {
      position: "6",
      raceNumber: "10",
      name: "Paola Berber",
      finishTime: "133 hrs 2 mins",
      distance: "789.36 KM",
      badge: 50,
    },
    {
      position: "\u{1F947}",
      raceNumber: "15",
      name: "Zaira Contreras",
      finishTime: "91 hrs 1 min",
      distance: "789.36 KM",
      badge: 1,
    },
    {
      position: "5",
      raceNumber: "28",
      name: "Paula Ximena Zenteno Arvizu",
      finishTime: "129 hrs 39 mins",
      distance: "789.36 KM",
      badge: 5,
    },
    {
      position: "4",
      raceNumber: "36",
      name: "Silvia Franco Contreras",
      finishTime: "129 hrs 35 mins",
      distance: "789.36 KM",
      badge: 4,
    },
    {
      position: "\u{1F949}",
      raceNumber: "44",
      name: "Martiza Siomara Gama Torres",
      finishTime: "108 hrs 57 mins",
      distance: "789.36 KM",
      badge: 3,
    },
  ];

  const freeParticipants = [
    {
      position: "\u{1F947}",
      raceNumber: "37",
      name: "Alejandro Ruano",
      finishTime: "TBA",
      distance: "789.36 KM",
      badge: 1,
    },
    {
      position: "\u{1F948}",
      raceNumber: "31",
      name: "Sofia Zarate",
      finishTime: "TBA",
      distance: "789.36 KM",
      badge: 2,
    },
  ];

  const doublesParticipants = [
    {
      position: "5",
      raceNumber: "002",
      name: "Rafael Ortiz & Marisol Moreno",
      finishTime: "107 hrs 11 mins",
      distance: "789.36 KM",
      badge: 5,
    },
    {
      position: "DNF",
      raceNumber: "003",
      name: "Samuel Finlay & Aidan Halpin",
      finishTime: "DNF",
      distance: "276.99 KM",
      badge: 15,
    },
    {
      position: "4",
      raceNumber: "004",
      name: "David Martinez & Juan Peynado",
      finishTime: "99 hrs 55 mins",
      distance: "789.36 KM",
      badge: 4,
    },
    {
      position: "DNF",
      raceNumber: "005",
      name: "Luis Muñoz & Camilo Rodriguez",
      finishTime: "DNF",
      distance: "518.57 KM",
      badge: 13,
    },
    {
      position: "10",
      raceNumber: "006",
      name: "Alex Reynolds & Lezly Pineda",
      finishTime: "124 hrs 7 mins",
      distance: "789.36 KM",
      badge: 10,
    },
    {
      position: "\u{1F948}",
      raceNumber: "007",
      name: "Rafael Ospino & Daniel Anzola",
      finishTime: "68 hrs 33 mins",
      distance: "789.36 KM",
      badge: 2,
    },
    {
      position: "DNF",
      raceNumber: "009",
      name: "Edgar Mora & Mario Gallegos",
      finishTime: "DNF",
      distance: "621.29 KM",
      badge: 11,
    },
    {
      position: "9",
      raceNumber: "010",
      name: "Jorge Dominguez & Juan Franquiz",
      finishTime: "121 hrs 4 mins",
      distance: "789.36 KM",
      badge: 9,
    },
    {
      position: "8",
      raceNumber: "012",
      name: "Adriana Solano & Eduardo Cambronero",
      finishTime: "116 hrs 49 mins",
      distance: "789.36 KM",
      badge: 8,
    },
    {
      position: "\u{1F949}",
      raceNumber: "013",
      name: "Osvaldo Garcia & Juan Hernandez",
      finishTime: "82 hrs 10 mins",
      distance: "789.36 KM",
      badge: 3,
    },
    {
      position: "DNF",
      raceNumber: "014",
      name: "Adan Montaño & Victor Ponce",
      finishTime: "DNF",
      distance: "588.41 KM",
      badge: 12,
    },
    {
      position: "\u{1F947}",
      raceNumber: "015",
      name: "Nelson Chavez & Emmit Rivera",
      finishTime: "63 hrs 48 mins",
      distance: "789.36 KM",
      badge: 1,
    },
    {
      position: "DNF",
      raceNumber: "016",
      name: "Alan Marin & Allan Coutollenc ",
      finishTime: "DNF",
      distance: "206.37 KM",
      badge: 16,
    },
    {
      position: "7",
      raceNumber: "017",
      name: "Alberto Ruiz & Manolo Arrubarrena",
      finishTime: "108 hrs 9 mins",
      distance: "789.36 KM",
      badge: 7,
    },
    {
      position: "6",
      raceNumber: "018",
      name: "Francisco Plata & Ricardo Ramos",
      finishTime: "107 hrs 15 mins",
      distance: "789.36 KM",
      badge: 6,
    },
    {
      position: "DNF",
      raceNumber: "019",
      name: "Fernando Rivera & Luis Lopez",
      finishTime: "DNF",
      distance: "410.76 KM",
      badge: 14,
    },
  ];

  const handleSelect = (e) => {
    let sortedParticipants = [];
    if (e === "maleParticipants") {
      sortedParticipants = maleParticipants.sort((a, b) => a.badge - b.badge);
      setCat(sortedParticipants);
    }
    if (e === "femaleParticipants") {
      sortedParticipants = femaleParticipants.sort((a, b) => a.badge - b.badge);
      setCat(sortedParticipants);
    }
    if (e === "doublesParticipants") {
      sortedParticipants = doublesParticipants.sort(
        (a, b) => a.badge - b.badge
      );
      setCat(sortedParticipants);
    }
    if (e === "freeParticipants") {
      setCat(freeParticipants);
    }
  };

  return (
    <div className="brevet-container">
      <Container>
        <Row>
          <Col className="flyer-container">
            <Image src={mainImg} />
          </Col>
        </Row>
        <Row>
          <Col className="flyer-container">
            <p style={{ margin: 0 }}>
              <h1 className="custom-title">SAVE THE DATE</h1>
              <h1 className="custom-title">ABRIL 27 - MAYO 2 2024</h1>
            </p>
          </Col>

          <Row>
            <h1 className="custom-title">RUTA</h1>
            <iframe
              src="https://www.followmychallenge.com/live/letourdefrankie24/"
              style={{ width: "900px", height: "500px", border: "none" }}
            ></iframe>
          </Row>
          <Row>
            <Col className="brevet-btn-container "></Col>
          </Row>
          <Row>
            <iframe
              style={{ width: "1200px", height: "800px", border: "none" }}
              src="https://www.youtube.com/embed/nEW1yGVhc4s?si=mXf9nJmrcuFTHk5H"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <Col className="brevet-btn-container ">
              <Button
                href="https://drive.google.com/uc?export=download&id=1_yHlK49WhxhmNBACj6QUGHmQdYz_LnOW"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                DESCARGAR RUTA OFICIAL
              </Button>
            </Col>
          </Row>
          <Row>
            <h1 className="custom-title">INICIO DE CARRERA</h1>
            <h1 className="custom-title">
              {" "}
              <Countdown
                date={Date.parse("27 Apr 2024 01:00:00 GMT") + 1000}
                renderer={({ days, hours, minutes, seconds }) => (
                  <span>
                    {days}D : {hours}HRS : {minutes}MIN : {seconds}SEC
                  </span>
                )}
              />
            </h1>
            <h1 className="custom-title"> INSCRIPCIONES CERRADAS</h1>
          </Row>
          <Row>
            <Col>
              {" "}
              <h1 className="custom-title">LISTA DE CORREDORES</h1>
              <div className="btn-container">
                <DropdownButton
                  title="CATEGORY"
                  id="dropdown-menu-align-right"
                  variant="dark"
                  onSelect={handleSelect}
                >
                  <Dropdown.Item eventKey="femaleParticipants">
                    Femenino
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="freeParticipants">
                    Libre
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="maleParticipants">
                    Masculino
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="doublesParticipants">
                    Duplas
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="table-container">
                <Table
                  responsive
                  striped
                  bordered
                  hover
                  variant="dark"
                  size="sm"
                >
                  <thead>
                    <tr>
                      <th>Cap Number</th>
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
                          <td key={Math.random()}>{participant.raceNumber}</td>
                          <td key={Math.random()}>{participant.position}</td>
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
        </Row>
      </Container>
    </div>
  );
};

export default NextEdition;
