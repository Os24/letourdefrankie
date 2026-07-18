import React, { useState, useEffect } from "react";

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
  Tooltip,
  OverlayTrigger,
  Accordion,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import mainImg from "../../../src/images/pagina-1.jpg";
import Countdown from "react-countdown";
import useEventbrite from "react-eventbrite-popup-checkout";
import "./Ltdf2027.css";

const Ltdf2027: React.FC = () => {
  const eventbrite = useEventbrite({
    eventId: "1994448280496",
    modal: false,
    iFrameAutoAdapt: 100,
  });

  const [cat, setCat] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Femenino");
  const [filters, setFilters] = useState({
    name: "",
    raceNumber: "",
    nationality: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const maleParticipants = [
    {
      name: "TBA",
      raceNumber: "TBA",
      nationality: "",
      finishTime: "TBA",
      badge: 0,
      team: "TBA",
    },
  ];

  const femaleParticipants = [
    {
      name: "TBA",
      raceNumber: "TBA",
      nationality: "",
      finishTime: "TBA",
      badge: 0,
      team: "TBA",
    },
  ];

  const freeParticipants = [
    {
      name: "TBA",
      raceNumber: "TBA",
      nationality: "",
      finishTime: "TBA",
      badge: 0,
      team: "TBA",
    },
  ];

  const doublesParticipants = [
    {
      name: "TBA",
      raceNumber: "TBA",
      nationality: "",
      finishTime: "TBA",
      badge: 0,
      team: "TBA",
    },
  ];

  useEffect(() => {
    // Load female participants by default
    const sortedFemaleParticipants = femaleParticipants.sort(
      (a, b) => a.badge - b.badge,
    );
    setCat(sortedFemaleParticipants);
  }, []);

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
    setCurrentPage(1);
  };

  const capitalizeNames = (name) => {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const filteredParticipants = cat.filter((participant) => {
    return (
      participant.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      participant.raceNumber
        .toLowerCase()
        .includes(filters.raceNumber.toLowerCase()) &&
      participant.nationality
        .toLowerCase()
        .includes(filters.nationality.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredParticipants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedParticipants = filteredParticipants.slice(
    startIndex,
    endIndex,
  );

  const handleSelect = (e) => {
    let sortedParticipants = maleParticipants;
    if (e === "maleParticipants") {
      sortedParticipants = maleParticipants.sort((a, b) => a.badge - b.badge);
      setCat(sortedParticipants);
      setSelectedCategory("Masculino");
      setCurrentPage(1);
    }
    if (e === "femaleParticipants") {
      sortedParticipants = femaleParticipants.sort((a, b) => a.badge - b.badge);
      setCat(sortedParticipants);
      setSelectedCategory("Femenino");
      setCurrentPage(1);
    }
    if (e === "doublesParticipants") {
      sortedParticipants = doublesParticipants.sort(
        (a, b) => a.badge - b.badge,
      );
      setCat(sortedParticipants);
      setSelectedCategory("Duplas");
      setCurrentPage(1);
    }
    if (e === "freeParticipants") {
      setCat(freeParticipants);
      setSelectedCategory("Libre");
      setCurrentPage(1);
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
          <Col xs={12} className="flyer-container">
            <p style={{ margin: 0 }}>
              <h1 className="custom-title">SAVE THE DATE</h1>
              <h1 className="custom-title">ABRIL 24 - ABRIL 29 2027</h1>
            </p>
          </Col>

          <Col
            xs={12}
            className="brevet-btn-container "
            style={{ padding: "10px 0 30px", textAlign: "center" }}
          >
            <Button href="#race-details" variant="outline-light">
              MORE INFO
            </Button>
          </Col>

          <Row id="race-details" className="race-details-section">
            <Col>
              <h1 className="custom-title">RACE DETAILS</h1>
              <p className="race-details-copy">
                Le Tour de Frankie: El Infierno del Sur es una carrera de
                ultra-distancia autosuficiente que recorre la Ciudad de
                México hasta Puerto Escondido, Oaxaca. Los corredores tienen
                130 horas para completar la ruta, pasando por 5 checkpoints
                obligatorios en el camino.
              </p>
              <p className="race-details-note">
                Es una carrera <strong>autogestiva y autosuficiente</strong>:
                no está permitido ningún tipo de apoyo programado durante la
                ruta. Cada corredor debe valerse por sí mismo (o con su
                dupla, en la categoría correspondiente) para resolver
                logística, abastecimiento y mecánica a lo largo de todo el
                recorrido.
              </p>
              <div className="race-details-stats">
                <div className="race-details-stat">
                  <span className="race-details-stat-value">800+ km</span>
                  <span className="race-details-stat-label">Distancia</span>
                </div>
                <div className="race-details-stat">
                  <span className="race-details-stat-value">130 hrs</span>
                  <span className="race-details-stat-label">
                    Límite de tiempo
                  </span>
                </div>
                <div className="race-details-stat">
                  <span className="race-details-stat-value">5</span>
                  <span className="race-details-stat-label">Checkpoints</span>
                </div>
                <div className="race-details-stat">
                  <span className="race-details-stat-value">
                    Individual / Duplas
                  </span>
                  <span className="race-details-stat-label">Categorías</span>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <h1 className="custom-title">RUTA</h1>
            <h1 className="custom-title">POR CONFIRMAR</h1>
            {/* <iframe
              src="https://www.followmychallenge.com/live/letourdefrankie26/?iframe"
              style={{ width: "100%", height: "500px", border: "none" }}
            ></iframe>
            <Col
              className="brevet-btn-container "
              style={{ padding: "20px 0", textAlign: "center" }}
            >
              <Button
                href="https://drive.google.com/uc?export=download&id=1q09gL-LSvlfB55fCpxcRREUXrEHqGqlf"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                DESCARGAR RUTA OFICIAL 2026
              </Button>
            </Col> */}
            <h1 className="custom-title">CDMX - PUERTO ESCONDIDO</h1>
          </Row>
          <Row>
            <Col className="brevet-btn-container "></Col>
          </Row>
          <Row>
            <div className="responsive-iframe-container">
              <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/mVe0L4n1C5A?si=q2cKBKmLMLUIDhsE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </Row>
          <Row className="faq-section">
            <Col>
              <h1 className="custom-title">LO ESENCIAL</h1>
              <p className="faq-subtitle">
                Todo lo que debes saber antes de rodar
              </p>
              <Accordion className="faq-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>¿Cómo me inscribo?</Accordion.Header>
                  <Accordion.Body>
                    A través de Eventbrite, dando clic en el botón "QUIERO
                    INSCRIBIRME" en la sección de inscripciones de esta
                    página.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>¿Qué no está incluido?</Accordion.Header>
                  <Accordion.Body>
                    Hospedaje, comidas, vuelos, traslados al aeropuerto,
                    transporte de bicicleta, seguro de viaje, asistencia
                    mecánica, refacciones y gastos personales no están
                    incluidos. Le Tour de Frankie es un evento completamente
                    autosuficiente.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    ¿Es un evento con apoyo o asistencia?
                  </Accordion.Header>
                  <Accordion.Body>
                    No. Le Tour de Frankie es un evento autogestivo y
                    autosuficiente: no está permitido ningún tipo de apoyo
                    programado durante la ruta. Solo puedes recibir
                    asistencia si ya no vas a continuar en la carrera.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    ¿Cuánto cuesta la carrera?
                  </Accordion.Header>
                  <Accordion.Body>
                    Categoría Individual: $5,200 MXN. Categoría Duplas:
                    $6,600 MXN.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    ¿Qué incluye mi inscripción?
                  </Accordion.Header>
                  <Accordion.Body>
                    El kit incluye:
                    <ul>
                      <li>Playera del evento</li>
                      <li>Gorra de ciclismo conmemorativa con # de corredor</li>
                      <li>Renta de dispositivo Live Tracking</li>
                      <li>Pilas para el dispositivo Live Tracking</li>
                      <li>Stickers # de corredor</li>
                      <li>Cinchos para sujetar el tracker</li>
                      <li>Manifiesto para sellar en cada checkpoint</li>
                      <li>Souvenirs de patrocinadores</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    ¿Qué equipo necesito llevar?
                  </Accordion.Header>
                  <Accordion.Body>
                    Casco (obligatorio en toda la ruta), luces delantera y
                    trasera, kit de emergencia, kit de despinche y
                    herramientas, y frenos de repuesto, entre otros. El
                    equipo completo está detallado en el reglamento oficial.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>¿Qué es el Live Tracking?</Accordion.Header>
                  <Accordion.Body>
                    Cada corredor porta un rastreador satelital durante todo
                    el evento. El Live Tracking permite que amigos,
                    familiares y seguidores puedan seguir la ruta en tiempo
                    real desde cualquier parte del mundo.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    ¿Dónde encuentro el reglamento completo?
                  </Accordion.Header>
                  <Accordion.Body>
                    Puedes consultar el reglamento oficial completo en la{" "}
                    <Link to="/Rules">página de Reglamento</Link>.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <h1 className="custom-title">INICIO DE CARRERA</h1>
            <h1 className="custom-title">
              {" "}
              <Countdown
                date={Date.parse("24 Apr 2027 01:00:00 GMT") + 1000}
                renderer={({ days, hours, minutes, seconds }) => (
                  <span>
                    {days}D : {hours}HRS : {minutes}MIN : {seconds}SEC
                  </span>
                )}
              />
            </h1>
            <h1 className="custom-title"> INSCRIPCIONES</h1>

            <Col className="brevet-btn-container ">
              <Button
                href="https://www.eventbrite.com.mx/e/le-tour-de-frankie-el-infierno-del-sur-2027-tickets-1994448280496?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                QUIERO INSCRIBIRME
              </Button>
            </Col>
          </Row>
          <Row>
            <div id="eventbrite-widget-container">
              {eventbrite && <div id={eventbrite.id}></div>}
            </div>
          </Row>
          <Row>
            <Col>
              {" "}
              <h1 className="custom-title" style={{ textAlign: "left" }}>
                LISTA DE CORREDORES
              </h1>
              <p
                style={{
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  marginTop: "20px",
                  color: "#fff",
                  textAlign: "left",
                  marginLeft: "0",
                }}
              >
                Categoría:
              </p>
              <div className="btn-container" style={{ justifyContent: "flex-start", marginLeft: "0", paddingLeft: "0" }}>
                <DropdownButton
                  title={selectedCategory}
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
                  variant="light"
                  size="sm"
                >
                  <thead>
                    <tr>
                      <th>Position</th>
                      <th>
                        Cap Number{" "}
                        <OverlayTrigger
                          trigger="click"
                          rootClose
                          placement="bottom"
                          overlay={
                            <Tooltip id="tooltip-cap-filter">
                              <input
                                className="filter-input"
                                type="text"
                                placeholder="🔍 Filter..."
                                value={filters.raceNumber}
                                onChange={(e) =>
                                  handleFilterChange(
                                    "raceNumber",
                                    e.target.value,
                                  )
                                }
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                  padding: "8px 10px",
                                  fontSize: "0.85em",
                                  backgroundColor: "#2a2a2a",
                                  color: "#fff",
                                  border: "2px solid #ffc107",
                                  borderRadius: "4px",
                                  outline: "none",
                                }}
                              />
                            </Tooltip>
                          }
                        >
                          <Button
                            variant="link"
                            size="sm"
                            title="Click to filter by Cap Number"
                            style={{
                              color: "#ffc107",
                              textDecoration: "none",
                              fontSize: "1em",
                              padding: "0 0 2px 6px",
                              verticalAlign: "middle",
                              cursor: "pointer",
                            }}
                          >
                            🔎
                          </Button>
                        </OverlayTrigger>
                      </th>
                      <th>
                        Name{" "}
                        <OverlayTrigger
                          trigger="click"
                          rootClose
                          placement="bottom"
                          overlay={
                            <Tooltip id="tooltip-name-filter">
                              <input
                                className="filter-input"
                                type="text"
                                placeholder="🔍 Filter..."
                                value={filters.name}
                                onChange={(e) =>
                                  handleFilterChange("name", e.target.value)
                                }
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                  padding: "8px 10px",
                                  fontSize: "0.85em",
                                  backgroundColor: "#2a2a2a",
                                  color: "#fff",
                                  border: "2px solid #ffc107",
                                  borderRadius: "4px",
                                  outline: "none",
                                }}
                              />
                            </Tooltip>
                          }
                        >
                          <Button
                            variant="link"
                            size="sm"
                            title="Click to filter by Name"
                            style={{
                              color: "#ffc107",
                              textDecoration: "none",
                              fontSize: "1em",
                              padding: "0 0 2px 6px",
                              verticalAlign: "middle",
                              cursor: "pointer",
                            }}
                          >
                            🔎
                          </Button>
                        </OverlayTrigger>
                      </th>
                      <th>Team</th>
                      <th>
                        Nationality{" "}
                        <OverlayTrigger
                          trigger="click"
                          rootClose
                          placement="bottom"
                          overlay={
                            <Tooltip id="tooltip-nationality-filter">
                              <input
                                className="filter-input"
                                type="text"
                                placeholder="🔍 Filter..."
                                value={filters.nationality}
                                onChange={(e) =>
                                  handleFilterChange(
                                    "nationality",
                                    e.target.value,
                                  )
                                }
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                  padding: "8px 10px",
                                  fontSize: "0.85em",
                                  backgroundColor: "#2a2a2a",
                                  color: "#fff",
                                  border: "2px solid #ffc107",
                                  borderRadius: "4px",
                                  outline: "none",
                                }}
                              />
                            </Tooltip>
                          }
                        >
                          <Button
                            variant="link"
                            size="sm"
                            title="Click to filter by Nationality"
                            style={{
                              color: "#ffc107",
                              textDecoration: "none",
                              fontSize: "1em",
                              padding: "0 0 2px 6px",
                              verticalAlign: "middle",
                              cursor: "pointer",
                            }}
                          >
                            🔎
                          </Button>
                        </OverlayTrigger>
                      </th>
                      <th>Distance</th>
                      <th>Finish Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedParticipants.map((participant, index) => {
                      return (
                        <tr key={Math.random()}>
                          <td key={Math.random()}>{participant.position}</td>
                          <td key={Math.random()}>{participant.raceNumber}</td>
                          <td key={Math.random()}>
                            {capitalizeNames(participant.name)}
                          </td>
                          <td key={Math.random()}>{participant.team || '--'}</td>
                          <td key={Math.random()} style={{ fontSize: "1.5em" }}>
                            {participant.nationality}
                          </td>
                          <td key={Math.random()}>{participant.distance}</td>
                          <td key={Math.random()}>{participant.finishTime}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <div className="pagination-controls">
                <Button
                  variant="dark"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  style={{ marginRight: "10px" }}
                >
                  Previous
                </Button>
                <span
                  style={{ margin: "0 15px", fontSize: "1.1em", color: "#fff" }}
                >
                  Page {currentPage} of {totalPages || 1}
                </span>
                <Button
                  variant="dark"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  style={{ marginLeft: "10px" }}
                >
                  Next
                </Button>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Ltdf2027;
