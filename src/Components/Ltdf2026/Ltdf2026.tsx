import React, { useState,useEffect } from "react";

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
import mainImg from "../../../src/images/postr_2025.jpg";
import Countdown from "react-countdown";
import { Helmet } from "react-helmet";


declare global {
  interface Window {
    EBWidgets: any;
  }
}
const Ltdf2026: React.FC = () => {
  const [cat, setCat] = useState([]);


const EventbriteWidget = ({ eventId }) => {
  useEffect(() => {
      const script = document.createElement('script');
    script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
    script.async = true;
    script.onload = () => {
      if (window.EBWidgets) {
        window.EBWidgets.createWidget({
          widgetType: 'checkout',
          eventId: eventId, // Usa el prop eventId
          iframeContainerId: 'eventbrite-widget-container', // El ID del contenedor
          iframeContainerHeight: 425,
          onClose: () => {
            // Manejar el cierre del widget si es necesario
            console.log('Eventbrite widget closed');
          },
        });
      }
    };

    document.body.appendChild(script);
    // Devuelve la función de limpieza
    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
      const container = document.getElementById('eventbrite-widget-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [eventId]);
  
  // El return de este componente (fuera del useEffect) es el JSX normal
  return (
    <div id="eventbrite-widget-container">
  
    </div>
  );
};

  const maleParticipants = [
    {
      position: "TBA",
      raceNumber: "02",
      name: "Simon Luelsdorf",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },

    {
      position: "TBA",
      raceNumber: "03",
      name: "Mauricio Lara",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "04",
      name: "Jonas Hess",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "05",
      name: "Rafael Teran",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "06",
      name: "Gregory Topete",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "07",
      name: "Lucas Meyer de Freitas",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "08",
      name: "Manuel Perez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },

    {
      position: "TBA",
      raceNumber: "09",
      name: "Miguel Martinez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "10",
      name: "Sean Martin",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "11",
      name: "Alvin Escajeda",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "12",
      name: "Greg Garth",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "13",
      name: "Roman Martinez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "14",
      name: "Juan Sebastian Perez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "15",
      name: "Juan Mojarro",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "17",
      name: "Ali Rodriguez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "21",
      name: "Jacobo Rodriguez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "22",
      name: "Ulises Vásquez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "23",
      name: "Javi Velasquez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "24",
      name: "Luis Alberto Muñoz",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "25",
      name: "Elliot Levi Ramos",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "26",
      name: "Ivan Sandoval",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "27",
      name: "Andres Castillo",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "28",
      name: "Juan Franquiz",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "29",
      name: "Christian Ramirez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "31",
      name: "Cooper Ray",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },

    {
      position: "TBA",
      raceNumber: "32",
      name: "Enrique Llerena",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "33",
      name: "Abraham Gonzalez",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "34",
      name: "Rafael Torres",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "35",
      name: "Juan de Dios Guadarrama",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "36",
      name: "Juan Pablo Gama",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "37",
      name: "Omar Pulido",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "38",
      name: "Raul Mcpalm",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "39",
      name: "Mauricio Garcia",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },

    {
      position: "TBA",
      raceNumber: "40",
      name: "Efren Santos",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "41",
      name: "Tyreck Velazquez",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "42",
      name: "Jorge Uriel Dominguez",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "43",
      name: "Miguel Angel Huesca",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "44",
      name: "Noe Santana",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "45",
      name: "Alejandro Gomez",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "46",
      name: "Neftali Donato",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "47",
      name: "Ignacio Pelayo",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "48",
      name: "Adan Montaño",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "49",
      name: "Javier Martinez",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "50",
      name: "Felipe de Jesus Cebada",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "51",
      name: "Miguel Alatorre",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "52",
      name: "Heriberto Trejo",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "53",
      name: "Mario Uziel Reyes",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "54",
      name: "Esteban Cuarenta",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "55",
      name: "Victor Ponce",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "56",
      name: "Carlos Bala",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "57",
      name: "Alejandro Garduño",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "58",
      name: "Vogar Hernandez",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "59",
      name: "Edrei Tellez",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "60",
      name: "Osvaldo Serrano",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "61",
      name: "Ernesto Vidal",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "62",
      name: "Jorge Sanchez",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "64",
      name: "Jesus Esparza",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "65",
      name: "Sebastian Miranda",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "66",
      name: "Esteban Robles",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "68",
      name: "Eduardo Avalos",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "69",
      name: "Saturnino Ruano",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "71",
      name: "Azareel Martínez",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
  ];

  const femaleParticipants = [
    {
      position: "TBA",
      raceNumber: "01",
      name: "Zaira Contreras",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "16",
      name: "Tania Arana",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "18",
      name: "Diana Gutierrez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "19",
      name: "Diana Camacho",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "20",
      name: "Fernanda Gutierrez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "30",
      name: "Paola Berber",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "70",
      name: "Edna Gonzalez",
      distance: "TBA",
      finishTime: "TBA",
      badge: 50,
    },
  ];

  const freeParticipants = [
    {
      position: "TBA",
      raceNumber: "67",
      name: "Sofia Zarate",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
  ];

  const doublesParticipants = [
    {
      position: "TBA",
      raceNumber: "001",
      name: "Nelson Chavez & Emmit Rivera",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "002",
      name: "Ernesto cano & Edgar Luna",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "003",
      name: "Alan Bermudez & Cristopher Isai Magaña",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "004",
      name: "Moctezuma Martinez & Omar Olivares",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "005",
      name: "Carolina Leiva & Argelia Pineda",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "006",
      name: "Francisco Marmolejo & Pablo Mabarak",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "007",
      name: "Alex Reynolds & Lezly Pineda",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "008",
      name: "Felix Cantu & Pablo Valdes",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "009",
      name: "Daniel Castillo & Julio Torres",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "010",
      name: "Osvaldo de la Riva & Omar de la Riva",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "011",
      name: "Carlos Quiroz & Alberto Taquex",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "012",
      name: "Joaquin Gonzalez & Emiliano Cardenas",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "013",
      name: "Liliana Gonzalez & Guillermo Femat",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "014",
      name: "Coral Garcia & Edgar Verduzco",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "015",
      name: "Oscar Figueroa & Daniel Figueroa ",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "016",
      name: "Sergio Garcia & Yameli Alfano ",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "017",
      name: "Gabriela Guerra & Gilberto Reza",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "018",
      name: "Alberto Mora & Fernando Mora",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "019",
      name: "Felix Contreras & Victor Perez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "020",
      name: "Osvaldo Garcia  & Juan Pablo Hernandez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
    {
      position: "TBA",
      raceNumber: "063",
      name: "Alejandro Maya & Itai Vazquez",
      finishTime: "TBA",
      distance: "TBA",
      badge: 50,
    },
  ];

  const handleSelect = (e) => {
    let sortedParticipants = maleParticipants;
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
           <h1 className="custom-title">EN CONSTRUCCION</h1>
          </Col>
        </Row>
        <Row>
          <Col className="flyer-container">
            <p style={{ margin: 0 }}>
              <h1 className="custom-title">SAVE THE DATE</h1>
              <h1 className="custom-title">ABRIL 25 - ABRIL 30 2026</h1>
            </p>
          </Col>

          <Row>
            <h1 className="custom-title">RUTA</h1>
            {/* <iframe
              src="https://www.followmychallenge.com/live/letourdefrankie25/?iframe"
              style={{ width: "900px", height: "500px", border: "none" }}
            ></iframe> */}
            <h1 className="custom-title">CDMX - PUERTO ESCONDIDO</h1>
          </Row>
          <Row>
            <Col className="brevet-btn-container "></Col>
          </Row>
          <Row>
            <iframe
              style={{ width: "1200px", height: "800px", border: "none" }}
              src="https://www.youtube.com/embed/mVe0L4n1C5A?si=q2cKBKmLMLUIDhsE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <Col className="brevet-btn-container ">
              <Button
                href="https://drive.google.com/uc?export=download&id=1A5oy-o643U2hXurJ7rdM783JbTMaSlxG"
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
              <Countdown date={Date.parse("25 Apr 2026 01:00:00 GMT") + 1000} />
            </h1>
            <h1 className="custom-title"> INSCRIPCIONES A PARTIR DEL 15 DE NOVIEMBRE 2025</h1>
            <EventbriteWidget eventId={'1970542590935'}/>

            <Col className="brevet-btn-container ">
              
              
              <Button
                href="https://www.eventbrite.com.mx/e/le-tour-de-frankie-el-infierno-del-sur-2026-tickets-1970542590935?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              
              >
                QUIERO INSCRIBIRME
              </Button>
            </Col>
          </Row>
          <Row>
            {/* <Col>
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
            </Col> */}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Ltdf2026;
