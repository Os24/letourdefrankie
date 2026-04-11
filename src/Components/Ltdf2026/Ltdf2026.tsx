import React, { useState, useEffect, useRef } from "react";

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
} from "react-bootstrap";
import mainImg from "../../../src/images/flyer2026ltdf.jpg";
import Countdown from "react-countdown";
import "./Ltdf2026.css";

const Ltdf2026: React.FC = () => {
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
      name: "Sebastián Miranda",
      raceNumber: "01",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Daniel Marques",
      raceNumber: "02",
      nationality: "🇧🇷",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Francisco Garcia",
      raceNumber: "03",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "edgar david santiago rosas",
      raceNumber: "04",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Jose Rogelio Covarrubias cardenas",
      raceNumber: "05",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Fernando Jimenez",
      raceNumber: "06",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Stuart Brown",
      raceNumber: "07",
      nationality: "🇬🇧",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Omar Pulido",
      raceNumber: "08",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },

    {
      name: "Emmanuel Guzman",
      raceNumber: "09",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Luis Villedas",
      raceNumber: "10",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Pablo Manuel Martínez Sandoval",
      raceNumber: "11",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Carlos Galvan",
      raceNumber: "12",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Daniel Rueda Martinez",
      raceNumber: "13",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Armando González",
      raceNumber: "14",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Kevin Cabrera",
      raceNumber: "15",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Luis Orozco Sanchez",
      raceNumber: "17",
      nationality: "🇺🇸",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Gerardo Carrillo",
      raceNumber: "19",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Esteban Flores Montero",
      raceNumber: "20",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Christopher Chavez",
      raceNumber: "21",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Nicholas Tornambe",
      raceNumber: "22",
      nationality: "🇺🇸",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Armando Garcia Llanos",
      raceNumber: "23",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Zachary Morvant",
      raceNumber: "24",
      nationality: "🇺🇸",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Alberto Ruiz",
      raceNumber: "25",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "José Guillermo Femat Zarazúa",
      raceNumber: "26",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Erick Hernandez Guerrero",
      raceNumber: "27",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Salvador Islas",
      raceNumber: "29",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Patricio Rodríguez",
      raceNumber: "30",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Francisco Michell Salinas González",
      raceNumber: "31",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Abraham González Ruíz",
      raceNumber: "33",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "GIBRÁN NANDÍ AYALA",
      raceNumber: "34",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Brian Baird",
      raceNumber: "35",
      nationality: "🇺🇸",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Ernesto Cano",
      raceNumber: "36",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "moises castillo",
      raceNumber: "38",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "axel zoe vega anzaldo",
      raceNumber: "39",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Ernesto Cano arguelles",
      raceNumber: "40",
      nationality: "🇺🇸",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "david berumen",
      raceNumber: "41",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Marino Spinoza",
      raceNumber: "42",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },

    {
      name: "Doryan salvador Apolinar Callejas López",
      raceNumber: "43",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Iván Iglesias Martinez",
      raceNumber: "44",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Sergio Aponte",
      raceNumber: "45",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Jacobo Rodriguez Arredondo",
      raceNumber: "46",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "DONALDO RAMOS",
      raceNumber: "47",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Jesús Estrada",
      raceNumber: "48",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "julian Manrique",
      raceNumber: "49",
      nationality: "🇨🇴",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "ELLIOT LEVI RAMOS SALDAÑA",
      raceNumber: "50",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Manuel Vargas",
      raceNumber: "52",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Sebastiano Frandino",
      raceNumber: "53",
      nationality: "🇮🇹",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "César Ixehuatl Mejía",
      raceNumber: "54",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Ricardo Arista Mejía",
      raceNumber: "55",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Jorge luis Larrea lopez",
      raceNumber: "56",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Ethan Weir",
      raceNumber: "59",
      nationality: "🇺🇸",
      finishTime: "TBD",
      badge: 50,
    },
     {
      name: "Angel Padilla Contreras",
      raceNumber: "60",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Carlos Vazquez",
      raceNumber: "61",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Miguel Alatorre",
      raceNumber: "62",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Reid Passmore",
      raceNumber: "63",
      nationality: "🇺🇸",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Alfredo Morón",
      raceNumber: "64",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Max Maclean",
      raceNumber: "65",
      nationality: "🇬🇧",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Gerardo Rojano",
      raceNumber: "66",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Juan Pablo Gama Gonzalez",
      raceNumber: "67",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Ivan Oziel Gonzalez Huerta",
      raceNumber: "68",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Brian Elander",
      raceNumber: "69",
      nationality: "🇺🇸",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Miguel Ángel Huesca García",
      raceNumber: "70",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Joaquin Perez Zamudio",
      raceNumber: "71",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Francisco javier Luna Vazquez",
      raceNumber: "72",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Fernando Arriaga",
      raceNumber: "73",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Miguel Angel Mendoza",
      raceNumber: "74",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Ulises Jimenez Alfaro",
      raceNumber: "75",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Raul McPalm",
      raceNumber: "76",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Hector Mendez Cruz",
      raceNumber: "77",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "MISAEL RIOS",
      raceNumber: "78",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Carlos Bala",
      raceNumber: "79",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Enrique Sandoval",
      raceNumber: "80",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Andres Castillo",
      raceNumber: "81",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Daniel Alberto Medina Leon",
      raceNumber: "82",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Daniel Jasso Hernández",
      raceNumber: "83",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },

    {
      name: "Rafael Ospino",
      raceNumber: "84",
      nationality: "🇨🇴",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Antonio Jesús",
      raceNumber: "85",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Christian Ivan Rodríguez Vences",
      raceNumber: "86",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Luis Alberto Ramirez Diaz",
      raceNumber: "87",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Miguel Martínez",
      raceNumber: "88",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Mariano Torres Villanueva",
      raceNumber: "89",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "MAURICIO ENRIQUEZ",
      raceNumber: "90",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Ernesto Vidal Flores",
      raceNumber: "91",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Eder Alexio Cruz Pérez",
      raceNumber: "92",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Angel Zetina",
      raceNumber: "93",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "MISAEL DE PAZ CASTILLO",
      raceNumber: "94",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Federico Arturo León Solis",
      raceNumber: "95",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Juan Javier Martinez Garmendia",
      raceNumber: "96",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Brad Sutton",
      raceNumber: "97",
      nationality: "🇺🇸",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Alejandro Garduño",
      raceNumber: "98",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "JULIO VERTIZ",
      raceNumber: "99",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Gustavo Ruiz",
      raceNumber: "100",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Rabbi Abba Flores Gutiérrez",
      raceNumber: "101",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Héctor Castillo",
      raceNumber: "104",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Luis Jorge Rivera Pérez",
      raceNumber: "105",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Alvaro García Córdova",
      raceNumber: "109",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Mauricio García Rocha",
      raceNumber: "111",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "franco garrido",
      raceNumber: "112",
      nationality: "🇨🇱",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Roma Cibrian",
      raceNumber: "113",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Jorge Edmundo Alvarado Torres",
      raceNumber: "114",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Rodrigo Moreno",
      raceNumber: "115",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Fernando Hernández Contreras",
      raceNumber: "117",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "saturnino ruano",
      raceNumber: "118",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Omar Olivares",
      raceNumber: "119",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Blade Cleaver",
      raceNumber: "120",
      nationality: "🇨🇦",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Luis Felipe Alvarez Hinojosa",
      raceNumber: "121",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Jorge Francia",
      raceNumber: "122",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "JUAN HERNANDEZ",
      raceNumber: "123",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Thomas Van Laake",
      raceNumber: "124",
      nationality: "🇳🇱",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Eduardo Avalos",
      raceNumber: "125",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Javier Chavez",
      raceNumber: "126",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Devin Armstrong",
      raceNumber: "127",
      nationality: "🇺🇸",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Ignacio Pelayo",
      raceNumber: "128",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Fernando Monjaraz",
      raceNumber: "129",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
      {
      name: "Arturo Hugo Garcia Garcia",
      raceNumber: "130",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
  ];

  const femaleParticipants = [
    {
      name: "Lucelia Castillejos",
      raceNumber: "18",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Grisell Olivia Cruz Navarro",
      raceNumber: "28",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Mariana Devesa",
      raceNumber: "32",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Elda Guzman Morales",
      raceNumber: "37",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Santa Alexandra Coria Juarez",
      raceNumber: "51",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Ana Saucedo",
      raceNumber: "57",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "PAULA XIMENA Zenteno Arvizu",
      raceNumber: "58",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Bren Zamora",
      raceNumber: "102",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Paola Berber",
      raceNumber: "103",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Diana Gutierrez",
      raceNumber: "106",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Maria Fernanda Pacheco",
      raceNumber: "107",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Zaira Contreras Escamilla",
      raceNumber: "108",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Siomara Gama",
      raceNumber: "110",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Karla Alejandra Martínez Suro",
      raceNumber: "116",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
  ];

  const freeParticipants = [
    {
      name: "Ro Alegre",
      raceNumber: "151",
      nationality: "🇲🇽",
      finishTime: "TBD",
    },
  ];

  const doublesParticipants = [
    {
      name: "Emmitt Adrian Rivera & Nelson Chavez",
      raceNumber: "001",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "German Fernandez & Sayeg Gomez",
      raceNumber: "002",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Alejandro Maya & Liliana Lizette Castañeda",
      raceNumber: "003",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Jesús Leyva & Yazmin Solano",
      raceNumber: "004",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Ricardo Adan Trejo & Abner Yoab Gonzalez",
      raceNumber: "005",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Hildeberto Villa & Hector Manuel Alvarez",
      raceNumber: "006",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Antonio Baltazar & Filiberto Fuentes",
      raceNumber: "007",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Juan Manuel Muciño & Eduardo Salvador Gonzalez",
      raceNumber: "008",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Jonathan Martinez & Ricardo Velázquez",
      raceNumber: "009",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Fernando Alan Perez & Gustavo Serrano",
      raceNumber: "010",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Diego Velázquez & Miguel Sanson",
      raceNumber: "011",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Gabriela Guerra & Gilberto Reza",
      raceNumber: "012",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Felipe de Jesus Cebada & Adan Montaño",
      raceNumber: "013",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Osvaldo Garcia & Lennin Heberto Flores",
      raceNumber: "014",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Gerardo Garfias & Arturo Galicia",
      raceNumber: "015",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Noe Delgadillo & Daniel Salas Pérez",
      raceNumber: "016",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Francisco Zamarripa & Marcos Gerardo Franco",
      raceNumber: "017",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Daniel Zapata & Andrés Cervantes",
      raceNumber: "018",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Emmanuel López & Erick Alberto Mendiola",
      raceNumber: "020",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "David Esau Franco & Luis Felipe Alvarez",
      raceNumber: "021",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
    },
    {
      name: "Moisés Zepeda & Ali Villeda Garcia",
      raceNumber: "022",
      nationality: "🇲🇽",
      finishTime: "TBD",
      badge: 50,
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
          <Col className="flyer-container">
            <p style={{ margin: 0 }}>
              <h1 className="custom-title">SAVE THE DATE</h1>
              <h1 className="custom-title">ABRIL 25 - ABRIL 30 2026</h1>
            </p>
          </Col>

          <Row>
            <h1 className="custom-title">RUTA</h1>
            <iframe
              src="https://ridewithgps.com/embeds?type=route&id=54529374&metricUnits=true&sampleGraph=true"
              style={{ width: "100%", height: "500px", border: "none" }}
            ></iframe>
            <Col
              className="brevet-btn-container "
              style={{ padding: "20px 0", textAlign: "center" }}
            >
              <Button
                href="https://drive.google.com/uc?export=download&id=1fKQ6OgJHSbFHnW6J-im_tc1Fe3KK4vQo"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                DESCARGAR RUTA OFICIAL 2026
              </Button>
            </Col>
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
          <Row>
            <h1 className="custom-title">INICIO DE CARRERA</h1>
            <h1 className="custom-title">
              {" "}
              <Countdown
                date={Date.parse("25 Apr 2026 01:00:00 GMT") + 1000}
                renderer={({ days, hours, minutes, seconds }) => (
                  <span>
                    {days}D : {hours}HRS : {minutes}MIN : {seconds}SEC
                  </span>
                )}
              />
            </h1>
            <h1 className="custom-title"> INSCRIPCIONES AGOTADAS</h1>
            {/* 
            <Col className="brevet-btn-container ">
              <Button
                href="https://www.eventbrite.com.mx/e/le-tour-de-frankie-el-infierno-del-sur-2026-tickets-1970542590935?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                QUIERO INSCRIBIRME
              </Button>
            </Col> */}
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

export default Ltdf2026;
