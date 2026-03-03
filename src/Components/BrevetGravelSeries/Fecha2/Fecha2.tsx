import React from "react";
import "./Fecha2.css";
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
import fecha2Img from "../../../../src/images/brevet3.jpg";

const Fecha2: React.FC = () => {
  const cat = [
    {
      position: "TBA",
      name: "Esteban Robles",
      finishTime: "TBA",
      distance: "TBA",
      raceNumber: "01",
    },
    {
        position: "TBA",
        name: "Roman Martinez",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "28",
      },
      {
        position: "TBA",
        name: "Fernanda Alva",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "03",
      },
      {
        position: "TBA",
        name: "Oliver Dewey",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "04",
      },
      {
        position: "TBA",
        name: "Helio Gonzalez",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "05",
      },
      {
        position: "TBA",
        name: "Moises Castillo",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "06",
      },
      {
        position: "TBA",
        name: "Eduardo Maldonado",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "07",
      },
      {
        position: "TBA",
        name: "Erick Hernandez",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "08",
      },
      {
        position: "TBA",
        name: "Francisco Plata",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "09",
      },
      {
        position: "TBA",
        name: "Octavio Molina",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "10",
      },
      {
        position: "TBA",
        name: "Saturnino Ruano",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "11",
      },
      {
        position: "TBA",
        name: "Marco Gembe",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "12",
      },
      {
        position: "TBA",
        name: "America Sanchez",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "13",
      },
      {
        position: "TBA",
        name: "Oscar Paredes",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "14",
      },
      {
        position: "TBA",
        name: "Emiliano Barbosa",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "15",
      },
      {
        position: "TBA",
        name: "Osvaldo Garcia",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "16",
      },
      {
        position: "TBA",
        name: "Juan Pablo Hernandez",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "17",
      },
      {
        position: "TBA",
        name: "Daniel Tovar",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "18",
      },
      {
        position: "TBA",
        name: "Sidney Lewis",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "19",
      },
      {
        position: "TBA",
        name: "Alberto Ruiz",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "20",
      },
      {
        position: "TBA",
        name: "Eduardo Eliz",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "21",
      },
      {
        position: "TBA",
        name: "Ernesto Bracamontes",
        finishTime: "TBA",
        distance: "TBA",
        raceNumber: "22",
      },
  ];
  return (
    <div className="brevet-container">
      <Container>
        <Row>
          <Col className="flyer-container">
            <Image src={fecha2Img} />
          </Col>
        </Row>
        <Row>
          <Col className="flyer-container">
            <p>
              Para la ultima etapa del Brevet Gravel Series, nos vamos a
              visitiar el hermoso estado de Hidalgo 180 km y 4,000 metros de
              ascenso acumulado rampas de más del 20%🔝 con clima entre frio y
              calor Te recomendamos estudiar bien la ruta ya que es bastante
              retadora, con pocos puntos de abasto y poca cobertura telefonica
              <ul>
                <li>Cuando: 30 de noviembre 2024, Actopan, Hidalgo: 6:00 am</li>
                <li> Inscripciones abiertas</li>
                <li>Tiempo límite: 12 Horas</li>
                <li>
                  Nivel : Para mantener el espíritu de los eventos de ciclismo
                  de ultra distancia, alentamos a los participantes a ser
                  autosuficientes
                </li>
                <li>
                  Todos los recorridos deberán de ser registrados en Strava
                </li>
                <li style={{ fontWeight: 900 }}>
                  Costo: $350 Pago(depósito a cuenta bancaria) Cupo limitado{" "}
                </li>
                <li>Incluye mussette del evento y resultados en la pagina</li>
                <li>
                  Algunos de nuestros patrocinadores daran premios para los
                  primeros lugares de cada categoria
                </li>
                <li>
                  Requisitos : Bicicleta en perfecto estado mecánico Kit de
                  herramientas Reflejante Luces delantera y trasera <br />
                  Cuenta de Strava (se calificará el recorrido mediante la
                  aplicación) Se recomienda llanta ancha (35mm) como mínimo{" "}
                  <br /> Cualquier tipo de bicicleta ( no eléctricas o
                  asistidas) <br />
                  Cuenta de Strava (se calificará el recorrido mediante la
                  aplicación)
                  <br /> Carta responsiva
                </li>
              </ul>
            </p>
          </Col>
          <Row>
            <div className="flyer-container">
              <p>
                Para registarte es necesario enivar un correo a
                letourdefrankie@gmail.com
                <li>
                  {" "}
                  Asunto: Nombre completo y categoria(Femenino, masculino,
                  libre)
                </li>
                Descripcion del correo:
                <li> Nombre completo</li>
                <li>Categoria(Femenino, masculino, libre)</li>
                <li>Edad</li>
                <li>Contacto de emergencia</li>
                <li>Comprobante de pago</li>
                <li>
                  Carta responsiva llenada y firmada con los datos
                  correspondientes
                </li>
                <li>
                  Una vez que completes tu registro, recibirás un correo de
                  confirmación con los últimos detalles.
                </li>
                <span>
                  Datos Bancarios:
                  <li>Nombre: le tour</li>
                  <li>Clabe:014180200065109270</li>
                  <li>Num de cuenta:20006510927</li>
                  <li>Asunto:Donativo</li>
                  <li>Banco:Santander</li>
                </span>
              </p>
            </div>

            <Col className="brevet-btn-container ">
              <Button
                href="https://drive.google.com/uc?export=download&id=150JBOKrsZyCFcrRPAqDbHFoh7oROKSoe"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                DESCARGAR RESPONSIVA
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="brevet-btn-container ">
              <Button
                href="https://drive.google.com/uc?export=download&id=1ZuLnNu8BQ_NNLuXzzdntuHzbyor2ypxT"
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
              src="https://ridewithgps.com/embeds?type=route&id=48968656&metricUnits=true&sampleGraph=true"
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

export default Fecha2;
