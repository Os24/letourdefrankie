import React, { useState } from "react";
import { Button, Col, Row, Modal } from "react-bootstrap";
import "./Rules.css";
const Rules: React.FC = () => {
  const [switchLang, setSwitchlang] = useState<boolean>(false);
  const [smShow, setSmShow] = useState(false);
  const [smShowEng, setSmShowEng] = useState(false);

  return (
    <div className="rules-container">
      <Row>
        <Col style={{ textAlign: "right" }}>
          <Button
            style={{
              backgroundColor: "black",
              border: "1px solid white",
              padding: "6px",
              margin: "20px",
            }}
            onClick={() => setSwitchlang(switchLang === false ? true : false)}
          >
            {switchLang === true ? "Español" : "English"}
          </Button>
        </Col>
      </Row>
      <Row className={switchLang === false ? "" : "d-none"}>
        <h1>REGLAMENTO</h1>
        <Col className="d-none d-lg-block"></Col>
        <Col>
          <ol>
            <li>Rueda con responsabilidad y seguro</li>
            <li>
              Respeta las normas de tránsito y señalizaciones, las carreteras
              por las que rodarás son abiertas.
            </li>
            <li>No dejes basura en el camino.</li>
            <li>
              Es OBLIGATORIO usar luz delantera y trasera al rodar de noche,
              debes llevar guantes y lentes de seguridad, ropa visible y/o
              reflejantes.
            </li>
            <li>
              El uso del casco es obligatorio en toda la ruta.( en caso de no
              portarlo, es motivo de descalificación).
            </li>
            <li>
              Bicicleta en perfecto estado mecánico, llevar frenos de repuesto (
              balatas o gomas ) OBLIGATORIO
            </li>
            <li>
              NO esta permitido hacer DRAFTING o rodar con otro participante o 
              grupo si estas compitiendo en categoria individual 
            </li>
            <li>
              Kit de emergencia (powerbank, pastillas para el dolor, curitas,
              manta térmica, cinta microporo, gasas , etc, lo que consideres
              necesario para tu bienestar).
            </li>
            <li>
              Kit de despinche y herramientas (Bomba de aire, corta cadena,
              multiherramientas, parches, cámaras de repuesto, pegamento, lija,
              cinchos de plástico, cinta adhesiva, todo lo que creas necesario
              para tu viaje, etc ).
            </li>
            <li>
              Fecha de salida sabado 25 de abril 01:00 Hrs, tiempo límite para
              concluir la ruta jueves 30 de abril 11:00 Hrs (130 horas)
            </li>
            <li>
              Es OBLIGATORIO seguir la ruta oficial compartida en todo momento,
              si te desvías te debes incorporar lo más pronto posible en el
              punto donde te desviaste.
              <br />
              <a
                href="https://drive.google.com/uc?export=download&id=1fwMN3tPQNn1o_cbpmsOLWNFYm3PTB_a3"
                target="_blank"
              >
                Descargar Ruta
              </a>
            </li>
            <li>
              Al finalizar la ruta deberás mostrar los 5 check points marcados
              en tu libro de ruta por la organización y el dispositivo de Live
              Tracking, si te falta alguno o falta tu libro se considerará como
              recorrido no completado DNF (Cero tolerancia).
            </li>
            <li>
              Por ningún motivo deberás apagar tu dispositivo de
              tracking,siempre debes portarlo en un lugar donde pueda
              recibir/mandar señal. Si existe alguna anomalía deberás
              notificarlo a la organización lo más pronto posible o podrías ser
              sancionado o descalificado. Recuerda que parte de la ruta no habrá
              señal celular
            </li>
          </ol>
        </Col>
        <Col>
          <ol start={13}>
            <li>
              “El infierno del sur” es un evento SIN ASISTENCIA donde solo tú,
              tu bicicleta y tus habilidades podrán resolver las dificultades
              que se te presenten en la ruta.
            </li>
            <li>
              NO ESTÁ PERMITIDO EL USO DE BARREDORA NI VEHICULOS DE EMERGENCIA.
            </li>
            <li>
              Lleva suficiente comida/hidratación en todo momento, si vas a
              rodar de noche considera llevar suficiente abasto para 12 horas.
            </li>
            <li>
              Cualquier conducta antideportiva o poner en riesgo a otros
              corredores es motivo de descalificación.
            </li>
            <li>
              Cualquier tipo de asistencia es posible recibirla ÚNICAMENTE si ya
              no vas a continuar en la carrera, ningún automóvil o motocicleta
              puede alumbrar de noche ni tampoco ir detrás o a tu lado.
              PROHIBIDO cualquier tipo de asistencia programada.
            </li>
            <li>Compite con ética y honestidad .</li>
            <li>
              Todos los participantes deberán firmar carta de exoneración,
              responsiva del dispositivo de tracking, copia de de identificación
              oficial y copia de información del seguro de gastos médicos o
              Seguro Social(IMSS,ISSTE,SEGURO POPULAR o similar)
            </li>

            <li>
              Todos los participantes estan obligados cuidar y entregar el
              dispostitivo de live tracking en la meta.
            </li>
            <li>
              Se amable y respetuoso con la organización, este evento es posible
              gracias al trabajo y esfuerzo de cada uno de ellos.
            </li>
            <li>
              A lo largo ruta habrá voluntarios verificando que se cumpla el
              reglamento, cualquier incumplimento, es motivo de sanción o
              descalificación{" "}
            </li>
            <li>
              Todos los recorridos deberan ser subidos a Strava para verificar la veracidad{" "}
            </li>
            <li>
              Al registrarte en la carrera Le tour de Frankie (el infierno del
              sur), estás de acuerdo en que cualquier contenido audiovisual que
              se genere durante la carrera es propiedad de la organización, lo
              que significa que si algún contenido es utilizado para uso
              comercial, es necesario pagar una tarifa por esos derechos. El
              principal objetivo de este acuerdo es para poder mantener el costo
              de la inscripción lo más justo posible para todos los corredores.
              Si no estás registrado en la carrera, cualquier tipo de grabación
              está PROHIBIDO
            </li>
            <li>
              {" "}
              <Button onClick={() => setSmShow(true)} className="me-2">
                Cierre de checkpoints
              </Button>
            </li>
          </ol>

          <Modal
            size="lg"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Cierre de checkpoints
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ol style={{ listStyle: "none" }}>
                <li>Salida Zocalo de la Ciudad de Mexico Sabado 25 de Abril 2026 1:00 am</li>
                <li>Checkpoint 1 km 97 (Paso de Cortes 19.0862956, -98.6469329) 25 de Abril 2026 1:00 pm</li>
                <li>
                  Checkpoint 2 km 181(San Juan Epatlan 18.6416994, -98.3700210) 25 de Abril 2026 5:00 pm
                </li>
                <li>
                  Checkpoint 3 km 310.2(Acatlan de Osorio 18.2072776, -98.0487698) 26 de Abril 2026 11:59 pm
                </li>
                <li>
                  Checkpoint 4  km 519(Hotel Paraiso, Chalcatongo de Hidalgo 17.0301958, -97.5704806) 28 de Abril 2026 4:00 pm
                </li>
                <li>
                  Checkpoint 5  km 612(Casa Toronjiles 16.5890763, -97.6542671, Santiago Ixtayutla ) 29 de Abril 2026 6:00 pm
                </li>
                <li>Meta (Tlachiquero pulques Finos 15.83320809875156, -97.04331974732197,Puerto Escondido)30 de Abril 2026 11:00 am</li>
              </ol>
            </Modal.Body>
          </Modal>
        </Col>
        <Col className="d-none d-lg-block"></Col>
      </Row>

      <Row className={switchLang === true ? "" : "d-none"}>
        <h1>RULES</h1>
        <Col className="d-none d-lg-block"></Col>
        <Col>
          <ol>
            <li>Ride safe and responsibly</li>
            <li>
              Respect traffic rules and signs, roads for which you will ride are
              open
            </li>
            <li>No littering along the road</li>
            <li>
              It is MANDATORY to use front and rear light when riding at night,
              You must wear gloves and safety glasses, visible clothing and/or
              Reflective.
            </li>
            <li>
              The use of a helmet is mandatory throughout the route. (in case of
              no carrying it is grounds for disqualification).
            </li>
            <li>
              Bicycle in perfect mechanical condition, carry spare brakes
              (ballasts or tires) MANDATORY
            </li>

            <li>
              DRAFTING or riding along other particpant or group is 
              NOT ALLOWED if you are on SOLO category
            </li>
            <li>
              Emergency kit (powerbank, pain pills, band-aids, thermal blanket,
              micropore tape, gauze, etc, whatever you consider necessary for
              your well-being).
            </li>
            <li>
              Flat tire kit and tools (Air pump, chain cutter, multi-tools,
              patches, spare cameras, glue, sandpaper, plastic belts, adhesive
              tape, everything you think necessary for your trip, etc).
            </li>
            <li>
              Departure date Saturday April 25 01:00 Hrs, time limit for
              conclude the route Thursday, April  30 11:00 Hrs (130 hours)
            </li>
            <li>
              It is MANDATORY to follow the offical shared route at all times,
              if you deviations you must rejoin as soon as possible at the point
              where you deviated.
              <br />
              <a
                href="https://drive.google.com/file/d/1g9QYPQAF3BJJ3ZZd7q7wT0YPPovAFFyO/view?usp=share_link"
                target="_blank"
              >
                Download Route
              </a>
            </li>
            <li>
              At the last checkpoint of the route you must show the 4 marked
              check points,deliver your readBook and Livetracking device, if one
              is missing, either your book or device, will be considered as a
              race not completed DNF (Zero tolerance).
            </li>
            <li>
              For no reason you should turn off your liveTracking device, you
              should always carry it in a place where you can Receive/send
              signal. If there is any anomaly you should notify the organization
              as soon as possible or you could be sanctioned or disqualified.
              Remember that part of the route will not be Cellular signal, at
              the end of your race you must deliver the device to the
              organization.
            </li>
          </ol>
        </Col>
        <Col>
          <ol start={13}>
            <li>
              “El infierno del sur”is an event WITHOUT ASSISTANCE where only
              you, Your bike and your skills will be able to solve the
              difficulties that could be present along the route.
            </li>
            <li>
              THE USE OF SWEEPER OR EMERGENCY VEHICLES IS NOT ALLOWED.THE USE OF
              SWEEPER OR EMERGENCY VEHICLES IS NOT ALLOWED.
            </li>
            <li>
              Carry enough food/hydration at all times, if you're going to ride
              at night consider carrying enough supply for 12 hours.
            </li>
            <li>
              Any unsportsmanlike conduct or putting other racers at risk is
              grounds for disqualification.
            </li>
            <li>
              Any type of assistance can be received ONLY if you will not
              continue in the race, no car or motorcycle It can light you at
              night or go behind or to your side. PROHIBITED any type of
              scheduled assistance.
            </li>
            <li>Compete with ethics and honesty.</li>
            <li>
              All participants must sign a letter of exoneration, responsive of
              the tracking device, copy of official identification and Copy of
              medical insurance information or Insurance Social (IMSS, ISSTE,
              POPULAR INSURANCE or similar)
            </li>
            <li>
              Be kind and reluctant with the organization, this event is
              possible thanks to the work and effort of each of them.
            </li>
            <li>
              Along the route there will be volunteers verifying that the rules
              are being fllowed, any non-compliance, is grounds for sanction or
              disqualification{" "}
            </li>
            <li>
            All routes must be uploaded to Strava to verify veracity.{" "}
            </li>
            <li>
              By registering to the race Le tour de Frankie (El infierno del
              sur), you agree that any audio visual content that is generated
              during the race is owned by the organization, which means that if
              any content is used for commercial use, it is necessary to pay a
              fee for those rights. The The main objective of this agreement is
              to be able to maintain the cost of the registration as fair as
              possible for all racers. Altough if you are not registered in the
              race or part of the organization, any recording is PROHIBITED
            </li>
            <li>
              {" "}
              <Button onClick={() => setSmShow(true)} className="me-2">
                Checkpoints Closure
              </Button>
            </li>
          </ol>
          <Modal
            size="lg"
            show={smShowEng}
            onHide={() => setSmShowEng(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Checkpoints Closure
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ol style={{ listStyle: "none" }}>
              <li>Start Zocalo de la Ciudad de Mexico Sabado 25 de Abril 2026 1:00 am</li>
                <li>Checkpoint 1 km 97 (Paso de Cortes 19.0862956, -98.6469329) 25 de Abril 2026 1:00 pm</li>
                <li>
                  Checkpoint 2 km 181(San Juan Epatlan 18.6416994, -98.3700210) 25 de Abril 2026 5:00 pm
                </li>
                <li>
                  Checkpoint 3 km 310.2(Acatlan de Osorio 18.2072776, -98.0487698) 26 de Abril 2026 11:59 pm
                </li>
                <li>
                  Checkpoint 4  km 519(Hotel Paraiso, Chalcatongo de Hidalgo 17.0301958, -97.5704806) 28 de Abril 2026 4:00 pm
                </li>
                <li>
                  Checkpoint 5  km 612(Casa Toronjiles 16.5890763, -97.6542671, Santiago Ixtayutla ) 29 de Abril 2026 6:00 pm
                </li>
                <li>Meta (Tlachiquero pulques Finos 15.83320809875156, -97.04331974732197,Puerto Escondido)30 de Abril 2026 11:00 am</li>
              </ol>
            </Modal.Body>
          </Modal>
        </Col>
        <Col className="d-none d-lg-block"></Col>
      </Row>
    </div>
  );
};

export default Rules;
