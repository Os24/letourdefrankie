import React from "react";
import "./BrevetGravelSeries.css";
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
import brevetGravelImg from "../../../src/images/brevetGravel.jpg";

const BrevetGravelSeries: React.FC = () => {
  const cat = [
    {
      position: "\u{1F947}",
      name: "Sidney Lewis",
      finishTime: "6h 47m",
      distance: "126.52 km",
      raceNumber: "17",
    },
    {
      position: "\u{1F948}",
      name: "Osvaldo Vazquez Tonix ",
      finishTime: "7h 38m",
      distance: "126.52 km",
      raceNumber: "56",
    },

    {
      position: "\u{1F949}",
      name: "Marco Antonio Gutierrez Romero",
      finishTime: "8h 25m",
      distance: "126.98",
      raceNumber: "27",
    },
    {
      position: "4",
      name: "Silverio Xochitemol Romano",
      finishTime: "8h 16m",
      distance: "126.52 km",
      raceNumber: "29",
    },
    {
      position: "5",
      name: "Eduardo Guerrero",
      finishTime: "8h 16m",
      distance: "126.52 km",
      raceNumber: "50",
    },
    {
      position: "6",
      name: "Saturnine Ruano",
      finishTime: "8h 20m",
      distance: "126.52 km",
      raceNumber: "46",
    },
    {
      position: "7",
      name: "Eduardo Mozencahua Veloz",
      finishTime: "8h 34m",
      distance: "126.52 km",
      raceNumber: "40",
    },
    {
      position: "8",
      name: "Osvaldo Garcia Perez",
      finishTime: "8:56:30",
      distance: "126.52 km",
      raceNumber: "44",
    },
    {
      position: "9",
      name: "Juan Pablo Gama González ",
      finishTime: "8:41:24",
      distance: "126.52 km",
      raceNumber: "22",
    },
    {
      position: "10",
      name: "Sergio Larios",
      finishTime: "9h 0m",
      distance: "126.52 km",
      raceNumber: "53",
    },
    {
      position: "11",
      name: "Cooper Ray",
      finishTime: "11h 36m",
      distance: "126.52 km",
      raceNumber: "42",
    },
    {
      position: "12",
      name: "Juan Pablo Hernández Contreras",
      finishTime: "9h 0m",
      distance: "126.52 km",
      raceNumber: "48",
    },

    {
      position: "13",
      name: "Sofia Zarate",
      finishTime: "9h 0m",
      distance: "126.52 km",
      raceNumber: "48",
    },
    {
      position: "14",
      name: "Jorge Emilio Castro Martínez ",
      finishTime: "8h 35m",
      distance: "126.52 km",
      raceNumber: "02",
    },
    {
      position: "15",
      name: "Daniel Tovar Sanchez",
      finishTime: "9h 08m",
      distance: "126.52 km",
      raceNumber: "51",
    },

    {
      position: "16",
      name: "Ferran Tovar",
      finishTime: "8h 29m",
      distance: "126.52 km",
      raceNumber: "52",
    },
    {
      position: "17",
      name: "Hector de la O Ortega",
      finishTime: "9h 08m",
      distance: "126.52 km",
      raceNumber: "54",
    },
    {
      position: "18",
      name: "Alex Reynolds",
      finishTime: "9h 10m",
      distance: "126.52 km",
      raceNumber: "18",
    },

    {
      position: "19",
      name: "Fernando Trejo Veytia",
      finishTime: "9h 10m",
      distance: "126.52 km",
      raceNumber: "28",
    },
    {
      position: "20",
      name: "Omar Olivares",
      finishTime: "9h 41m",
      distance: "126.52 km",
      raceNumber: "08",
    },

    {
      position: "21",
      name: "Oscar Lopez",
      finishTime: "9h 45m",
      distance: "126.52 km",
      raceNumber: "49",
    },
    {
      position: "22",
      name: "Joaquin Perez",
      finishTime: "10h 00m",
      distance: "126.52 km",
      raceNumber: "23",
    },
    {
      position: "23",
      name: "Rafel Cruz",
      finishTime: "10h 32m",
      distance: "126.52 km",
      raceNumber: "55",
    },
    {
      position: "24",
      name: "Eutiquio Gomez",
      finishTime: "10h 34m",
      distance: "126.52 km",
      raceNumber: "20",
    },
    {
      position: "25",
      name: "Daniel Tonix Vazquez",
      finishTime: "10h 5m",
      distance: "126.52 km",
      raceNumber: "31",
    },
    {
      position: "26",
      name: "Angel “Ras”Tayén Iturria Sánchez",
      finishTime: "10h 9m",
      distance: "126.52 km",
      raceNumber: "09",
    },
    {
      position: "27",
      name: "Erick Hernandez Guerrero",
      finishTime: "11h 50m",
      distance: "126.52 km",
      raceNumber: "10",
    },
    {
      position: "28",
      name: "Octavio Molina",
      finishTime: "11h 58m",
      distance: "126.52 km",
      raceNumber: "30",
    },
    {
      position: "29",
      name: "Paola Berber",
      finishTime: "12h 00m",
      distance: "126.52 km",
      raceNumber: "41",
    },
    {
      position: "DNF",
      name: "Sergio Iván Flores Hernández",
      finishTime: "DNF",
      distance: "91.52 km",
      raceNumber: "26",
    },
    {
      position: "DNF",
      name: "Hector Sanchez",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "19",
    },
    {
      position: "DNF",
      name: "Daniel Romero Barón",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "45",
    },
    {
      position: "DNF",
      name: "Brad Sutton",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "45",
    },

    {
      position: "DNF",
      name: "Miguel Sebastián Sanson Martínez",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "47",
    },
    {
      position: "DNF",
      name: "Freddy aguirre",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "37",
    },
    {
      position: "DNF",
      name: "Doryan Brenda Laura Callejas López",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "38",
    },
    {
      position: "DNF",
      name: "Doryan Salvador Apolinar Callejas López",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "39",
    },

    {
      position: "DNF",
      name: "Fernando Mora Sanchez",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "01",
    },

    {
      position: "DNF",
      name: "Jose Nahum Cortes Carmona",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "03",
    },
    {
      position: "DNF",
      name: "Juan Antonio Canseco Acosta",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "04",
    },
    {
      position: "DNF",
      name: "Carlos Antonio Miranda Cadena",
      finishTime: "DNF",
      distance: "114.02 km",
      raceNumber: "05",
    },
    {
      position: "DNF",
      name: "Alberto Mora",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "06",
    },

    {
      position: "DNF",
      name: "Eduardo Maldonado Romero",
      finishTime: "DNF",
      distance: "127.26 km",
      raceNumber: "07",
    },
    {
      position: "DNF",
      name: "Isaias Pablo Tolentino",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "11",
    },
    {
      position: "DNF",
      name: "Rodrigo Sebastian Sánchez Ramírez",
      finishTime: "DNF",
      distance: "117.56 km",
      raceNumber: "12",
    },
    {
      position: "DNF",
      name: "Azareel Eluzaí Martínez Rodríguez",
      finishTime: "DNF",
      distance: "119.84 km",
      raceNumber: "34",
    },
    {
      position: "DNF",
      name: "Oscar Becerra Mora",
      finishTime: "DNF",
      distance: "126.52 km",
      raceNumber: "16",
    },

    {
      position: "DNF",
      name: "Daniel Jesús Gómez Montealegre",
      finishTime: "DNF",
      distance: "123.10 km",
      raceNumber: "35",
    },
    {
      position: "DNF",
      name: "Gerardo Gómez Montealegre",
      finishTime: "DNF",
      distance: "123.10 km",
      raceNumber: "36",
    },
    {
      position: "DNS",
      name: "Fernando Villegas Tapia",
      finishTime: "DNS",
      distance: "0.00 km",
      raceNumber: "13",
    },
    {
      position: "DNS",
      name: "Jorge Sanchez",
      finishTime: "DNS",
      distance: "0.00 km",
      raceNumber: "14",
    },
    {
      position: "DNS",
      name: "Alvaro Chavarria Ortega",
      finishTime: "DNS",
      distance: "0.00 km",
      raceNumber: "15",
    },
    {
      position: "DNS",
      name: "Alejandro Davila",
      finishTime: "DNS",
      distance: "0.00 km",
      raceNumber: "21",
    },

    {
      position: "DNS",
      name: "Carlos Marcial Fiallos Vides",
      finishTime: "DNS",
      distance: "0.00 km",
      raceNumber: "24",
    },
    {
      position: "DNS",
      name: "Fernando Garcia Rodriguez",
      finishTime: "DNS",
      distance: "0.00 km",
      raceNumber: "25",
    },
    {
      position: "DNS",
      name: "Andres Castillo",
      finishTime: "DNS",
      distance: "0.00 km",
      raceNumber: "32",
    },

    {
      position: "DNS",
      name: "Jaime Napoles",
      finishTime: "DNS",
      distance: "0.00 km",
      raceNumber: "60",
    },
  ];
  return (
    <div className="brevet-container">
      <Container>
        <Row>
          <Col className="flyer-container">
            <Image src={brevetGravelImg} />
          </Col>
        </Row>
        <Row>
          <Col className="flyer-container">
            <p>
              Ustedes lo pidieron, nosotros escuchamos 👹 Les presentamos la
              primera fecha del Brevet Gravel Series Una hermosa ruta trazada
              para los aficionados al gravel iniciando al sur de la Ciudad de
              México, cruzando por el eje volcánico para terminar en Santa Fe.
              128km con mas de 2700 metros de ascenso acumulado y rampas de más
              del 20%🔝
              <ul>
                <li>Cuando: 25 de agosto 2024, Centro Xochimilco: 5:00 am</li>
                <li> Inscripciones cerradas</li>
                <li>Tiempo límite: 12 Horas</li>
                <li>
                  Nivel : Para mantener el espíritu de los eventos de ciclismo
                  de ultra distancia, alentamos a los participantes a ser
                  autosuficientes
                </li>
                <li>
                  Todos los recorridos deberán de ser registrados en Strava
                </li>
                <li>
                  Costo: $350 Pago(depósito a cuenta bancaria) Cupo limitado{" "}
                </li>
                <li>Incluye playera del evento y resultados en la pagina</li>
                <li>
                  Requisitos : Bicicleta en perfecto estado mecánico Kit de
                  herramientas Reflejante Luces delantera y trasera <br />
                  Cuenta de Strava (se calificará el recorrido mediante la
                  aplicación) Se recomienda llanta ancha (35mm) como mínimo{" "}
                  <br /> Cualquier tipo de bicicleta ( no eléctricas o
                  asistidas) <br />
                  Cuenta de Strava (se calificará el recorrido mediante la
                  aplicación)
                  <br /> Carta responsiva (se enviará por correo para ser
                  firmada )
                </li>
              </ul>
            </p>
          </Col>
          <Row>
            {/* <Col className="brevet-btn-container ">
              <Button
                href="https://forms.gle/i3JvrzMKFNQBntjf8"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                REGISTRARME
              </Button>
            </Col> */}
          </Row>
          <Row>
            <Col className="brevet-btn-container ">
              <Button
                href="https://drive.google.com/uc?export=download&id=1-_Q5dpfqnU-SbFj-YEcv8kg4En-uNlb5"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                DESCARGAR RUTA
              </Button>
              <br />
            </Col>
          </Row>
          <Row>
            <h1 className="custom-title">RUTA</h1>
            <iframe
              src="https://ridewithgps.com/embeds?type=route&id=47852320&metricUnits=true&sampleGraph=true"
              style={{ width: "900px", height: "500px", border: "none" }}
            ></iframe>
          </Row>
          <Row>
            <h1 className="custom-title">PARTICIPANTES</h1>
          </Row>
          <Row>
            <Col>
              {" "}
              <Table responsive striped bordered hover variant="dark" size="sm">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Distance</th>
                    <th>Moving Time</th>
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
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default BrevetGravelSeries;
