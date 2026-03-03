import React from "react";
import "./Brevet.css";
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
import brevetImg from "../../../src/images/brevet.jpg";

const Brevet: React.FC = () => {
  const cat = [
    {
      name: "Steve Hernandez Peralta",
      finishTime: "	11:47:06",
      distance: "280.41 km",
      position: "\u{1F947}",
    },
    {
      position: "\u{1F948}",
      name: "Jaime Napoles",
      finishTime: "12:53:20",
      distance: "280.95 km",
      badge: "\u{1F948}",
    },
    {
      position: "\u{1F949}",
      name: "Luis Daniel Ramos Arredondo",
      finishTime: "13:26:09",
      distance: "281.07 km",
      badge: "DNS",
    },
    {
      name: "José Emiliano Osorio Jiménez ",
      finishTime: "	14:30:07",
      distance: "280.30 km",
      position: "4",
    },
    {
      name: "Víctor Manuel Ponce Fuentes",
      finishTime: "14:51:10",
      distance: "280.28 km",
      position: "5",
    },
    {
      name: "Mitchelle López Gonzalez",
      finishTime: "	13:20:15",
      distance: "280.30 km",
      position: "6",
    },
    {
      name: "Osvaldo Serrano Camargo",
      finishTime: "	13:41:13",
      distance: "276.50 km",
      position: "7",
    },
    {
      name: "Emmitt Adrián Rivera Rangel",
      finishTime: "15:19:31",
      distance: "285.91 km",
      position: "8",
    },
    {
      name: "JUAN MIGUEL JIMENEZ ISLAS",
      distance: "279.52 km",
      position: "9",
      finishTime: "15:21:50",
    },
    {
      name: "Sebastian Ospina",
      finishTime: "15:30:42",
      distance: "279.58 km",
      position: "10",
    },
    {
      name: "Alejandro Gómez Esquivel",
      finishTime: "15:34:04",
      distance: "278.75 km",
      position: "11",
    },
    {
      name: "Rafael Cruz Urvina",
      finishTime: "	15:26:26",
      distance: "273.31 km",
      position: "12",
    },
    {
      name: "Tatiana Miranda Juárez",
      finishTime: "	17:09:19",
      distance: "285.27 km",
      position: "13",
    },
    {
      name: "Jorge Alberto Soriano Diaz",
      finishTime: "18:11:22",
      distance: "278.12 km",
      position: "14",
    },
    {
      name: "Dredska Vázquez",
      finishTime: "18:11:38",
      distance: "283.57 km",
      position: "15",
    },
    {
      name: "Juan Antonio Canseco Acosta",
      finishTime: "	18:13:08",
      distance: "283.16 km",
      position: "16",
    },
    {
      name: "Omar olivares lascurain ",
      finishTime: "18:19:13",
      distance: "279.89 km",
      position: "17",
    },
    {
      name: "Joel Felipe rosas Fonseca",
      finishTime: "18:27:15",
      distance: "284.94 km",
      position: "18",
    },
    {
      name: "Alejandro Ruano",
      finishTime: "19:39:22",
      distance: "280.45 km",
      position: "19",
    },
    {
      name: "Raymundo Julian Rosas Villicaña",
      finishTime: "20:02:25",
      distance: "292.60 km",
      position: "20",
    },
    {
      position: "DNF",
      name: "Valentina Mancera Autrique",
      finishTime: "15:17:15",
      distance: "201.08 km",
      badge: "TBA",
    },
    {
      name: "Fernando Papaqui",
      finishTime: "	19:59:55",
      distance: "73.96 km",
      position: "DNF",
    },

    {
      name: "Javier Juárez Benavides",
      finishTime: "	14:47:54",
      distance: "219.97 km",
      position: "DNF",
    },

    {
      name: "Doryan Salvador Apolinar Callejas Lopez ",
      finishTime: "17:39:56",
      distance: "207.17 km",
      position: "DNF",
    },
    {
      name: "Doryan Brenda Laura Callejas Lopez",
      finishTime: "13:49:13",
      distance: "173.53 km",
      badge: "TBA",
      position: "DNF",
    },
    {
      name: "Juan José Patiño Islas",
      finishTime: "	17:21:32",
      distance: "206.43 km",
      position: "DNF",
    },

    {
      name: "Llerena Rosas Enrique Armando",
      distance: "200.32 km",
      finishTime: "13:23:35",
      position: "DNF",
    },

    {
      name: "Luis alberto mora sanchez",
      finishTime: "	10:42:24",
      distance: "76.06 km",
      position: "DNF",
    },

    {
      name: "Marco Antonio Hernández Carnalla",
      finishTime: "	19:27:05",
      distance: "281.50 km",
      position: "DNF",
    },

    {
      name: "Zaira Contreras Escamilla",
      finishTime: "3:31:57",
      distance: "88.35 km",
      position: "DNF",
    },
    {
      name: "Manuel Garcia Pulido",
      finishTime: "	18:14:50",
      distance: "220.19 km",
      position: "DNF",
    },
    {
      name: "Rodrigo Alejandro Moreno Castillo",
      finishTime: "	11:50:00",
      distance: "260.80 km",
      position: "DNF",
    },
    {
      position: "DNS",
      name: "Alberto Ruiz Corral",
      finishTime: "DNS",
      distance: "DNS",
      badge: "DNS",
    },
    {
      name: "Nancy Nallely Magaña Mateo",
      finishTime: "DNS",
      distance: "DNS",
      badge: "TBA",
      position: "DNS",
    },
    {
      name: "Eduardo Jiménez Saldaña",
      finishTime: "DNS",
      distance: "DNS",
      badge: "TBA",
      position: "DNS",
    },

    {
      name: "Diana Camacho More",
      finishTime: "DNS",
      distance: "DNS",
      badge: "TBA",
      position: "DNS",
    },
    {
      name: "Pamela Rodriguez",
      finishTime: "DNS",
      distance: "DNS",
      badge: "TBA",
      position: "DNS",
    },
    {
      name: "Juan Manuel Calleja Ascencio ",
      finishTime: "DNS",
      distance: "DNS",
      badge: "TBA",
      position: "DNS",
    },
    {
      name: "Alberto Huazo Martinez ",
      finishTime: "DNS",
      distance: "DNS",
      badge: "TBA",
      position: "DNS",
    },

    {
      name: "Nohemi Maldonado Romero ",
      finishTime: "DNS",
      distance: "DNS",
      badge: "TBA",
      position: "DNS",
    },
    {
      name: "César Carrillo Martínez",
      finishTime: "DNS",
      distance: "DNS",
      badge: "TBA",
      position: "DNS",
    },
    {
      name: "Daniel Salas Pérez",
      finishTime: "DNS",
      distance: "DNS",
      badge: "TBA",
      position: "DNS",
    },

    {
      name: "Esteban Ruiz Gayol",
      finishTime: "DNS",
      distance: "DNS",
      badge: "TBA",
      position: "DNS",
    },

    {
      name: "Eduardo Elizalde",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "Moctezuma martinez yañez",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },

    {
      name: "Daniel Naim García Carranza ",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "Dante Rueda Romero ",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "Diego Herrera",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "Pamela Fernanda Ortega De la Vega",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },

    {
      name: "Fátima Fabiola Lara Olague ",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "Juan Pablo Hernández Contreras ",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "Josué Manuel Bonilla Castelán",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "Eder Jonathan Rubelo Hernández",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "María Fernanda Alva Fuentes",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "Cesar David Zuñíga Galindo",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "Alejandro Vazquez García ",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },

    {
      name: "Antonio Vázquez",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "Alexander  Krieger Garduño",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
    {
      name: "Fernando Aguilar Guizar",
      finishTime: "DNS",
      distance: "DNS",
      position: "DNS",
    },
  ];
  return (
    <div className="brevet-container">
      <Container>
        <Row>
          <Col className="flyer-container">
            <Image src={brevetImg} />
          </Col>
        </Row>
        <Row>
          <Col className="flyer-container">
            <p>
              Tenemos el gusto de invitarlos a nuestro primer Brevet!! La ruta
              está trazada por uno de los recorridos más icónicos del ciclismo
              en México, iniciando en la ciudad de México, cruzando por el
              estado de Morelos, 270 km com mas de 5000 metros de ascenso
              acumulado 🔝
              <ul>
                <li>Cuando: 19 de agosto 2023, Zócalo cdmx Salida: 1:00 am</li>
                <li> Inscripciones cerradas</li>
                <li>Tiempo límite: 18 Horas</li>
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
                  herramientas Reflejante Luces delantera y trasera <br />{" "}
                  Cualquier tipo de bicicleta ( no eléctricas o asistidas){" "}
                  <br />
                  Cuenta de Strava (se calificará el recorrido mediante la
                  aplicación)
                  <br /> Carta responsiva (se enviará por correo para ser
                  firmada )
                </li>
              </ul>
            </p>
          </Col>
          <Row>
            <Col className="brevet-btn-container "></Col>
          </Row>
          <Row>
            <Col className="brevet-btn-container ">
              <Button
                href="https://drive.google.com/uc?export=download&id=1aFZobwoPqW38xQF4OB8JNm_p9x9u1meu"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                DESCARGAR RUTA
              </Button>
            </Col>
          </Row>
          <Row>
            <h1 className="custom-title">RUTA</h1>
            <iframe
              src="https://ridewithgps.com/embeds?type=trip&id=128544762&metricUnits=true&sampleGraph=true"
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

export default Brevet;
