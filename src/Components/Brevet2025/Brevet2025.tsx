import React, { useState } from "react";
import "./Brevet2025.css";
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
import brevet2025Img from "../../../src/images/brevet2025.png";

const BrevetNovember: React.FC = () => {
  const [cat, setCat] = useState([]);
  const maleParticipants = [
    {
      position: "TBD",
      name: "Erick Aguilar",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 1,
    },
    {
      position: "TBD",
      name: "Alan Zoe Alonso Garcia",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 2,
    },
    {
      position: "TBD",
      name: "Ricardo Arista Mejía",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 3,
    },
    {
      position: "TBD",
      name: "Emilio Bracamontes",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 4,
    },
    {
      position: "TBD",
      name: "Carlos Bravo",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 5,
    },
    {
      position: "TBD",
      name: "Hermes Ulises Bucio Estrada",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 6,
    },
    {
      position: "TBD",
      name: "Juan Ma Calleja",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 7,
    },
    {
      position: "TBD",
      name: "Juan Antonio Canseco",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 8,
    },
    {
      position: "TBD",
      name: "Alberto Caporali",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 9,
    },
    {
      position: "TBD",
      name: "Oscar Deleyja",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 10,
    },
    {
      position: "TBD",
      name: "Federico Cardenas",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 11,
    },
    {
      position: "TBD",
      name: "Cristopher Carrillo",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 12,
    },
    {
      position: "TBD",
      name: "Eduardo Carvajal Vargas",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 13,
    },
    {
      position: "TBD",
      name: "Raziel Castro",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 14,
    },
    {
      position: "TBD",
      name: "Alberto Catarino",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 15,
    },
    {
      position: "TBD",
      name: "Jaime Napoles",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 16,
    },
    {
      position: "TBD",
      name: "Ixin Cebada",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 17,
    },
    {
      position: "TBD",
      name: "Felipe de Jesus Cebada Montiel",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 18,
    },
    {
      position: "TBD",
      name: "Christopher Chávez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 19,
    },
    {
      position: "TBD",
      name: "Isaac Cherem",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 20,
    },
    {
      position: "TBD",
      name: "Luis Javier Chino",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 21,
    },
    {
      position: "TBD",
      name: "Alex Coil",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 22,
    },
    {
      position: "TBD",
      name: "Sergio Cortes Arzate",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 23,
    },
    {
      position: "TBD",
      name: "Rafael Cruz",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 24,
    },
    {
      position: "TBD",
      name: "Alejandro Delgado",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 25,
    },
    {
      position: "TBD",
      name: "Alberto Diaz",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 26,
    },
    {
      position: "TBD",
      name: "Leonardo Diaz",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 27,
    },
    {
      position: "TBD",
      name: "Miguel Espinoza",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 28,
    },
    {
      position: "TBD",
      name: "Guilllermo Femat",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 29,
    },
    {
      position: "TBD",
      name: "Alejo Feria",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 30,
    },
    {
      position: "TBD",
      name: "Luis Flores",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 31,
    },
    {
      position: "TBD",
      name: "Benjamin Junior Flores Hernandez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 32,
    },
    {
      position: "TBD",
      name: "Marcos Gerardo Franco",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 33,
    },
    {
      position: "TBD",
      name: "Alfredo Garcia",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 34,
    },
    {
      position: "TBD",
      name: "Ivan Garcia",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 35,
    },
    {
      position: "TBD",
      name: "Alfredo García",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 36,
    },
    {
      position: "TBD",
      name: "Fernando García Chaparro",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 37,
    },
    {
      position: "TBD",
      name: "Hector Garcia de Leon Valdes",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 38,
    },
    {
      position: "TBD",
      name: "Edgardo Garnelo",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 39,
    },
    {
      position: "TBD",
      name: "Eutiquio Gómez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 40,
    },
    {
      position: "TBD",
      name: "Armando Gonzalez Gutierrez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 41,
    },
    {
      position: "TBD",
      name: "Ulises Guadarrama",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 42,
    },
    {
      position: "TBD",
      name: "Eduardo Guerrero",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 43,
    },
    {
      position: "TBD",
      name: "Alhan Gutierrez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 44,
    },
    {
      position: "TBD",
      name: "Marco Hernandez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 45,
    },
    {
      position: "TBD",
      name: "Hugo Hernandez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 46,
    },
    {
      position: "TBD",
      name: "Marco Hernandez Carnalla",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 47,
    },
    {
      position: "TBD",
      name: "Juan Pablo Hernandez Contreras",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 48,
    },
    {
      position: "TBD",
      name: "Gerardo Efren Herrera Soto",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 49,
    },
    {
      position: "TBD",
      name: "Guillermo Ibarra",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 50,
    },
    {
      position: "TBD",
      name: "Eduardo Jiménez Saldaña",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 51,
    },
    {
      position: "TBD",
      name: "Alberto Jose",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 52,
    },
    {
      position: "TBD",
      name: "Diego Klein",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 53,
    },
    {
      position: "TBD",
      name: "Sergio Krasowsky",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 54,
    },
    {
      position: "TBD",
      name: "Erick Leal",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 55,
    },
    {
      position: "TBD",
      name: "Angel Luna",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 56,
    },
    {
      position: "TBD",
      name: "Ras Tayen",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 57,
    },
    {
      position: "TBD",
      name: "Abraham Malvaez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 58,
    },
    {
      position: "TBD",
      name: "Cesar Martinez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 59,
    },
    {
      position: "TBD",
      name: "Azareel Martínez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 60,
    },
    {
      position: "TBD",
      name: "Miguel Martínez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 61,
    },
    {
      position: "TBD",
      name: "Daniel Fabian Martinez Martinez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 62,
    },
    {
      position: "TBD",
      name: "Johan Fernando Martínez Montalvo",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 63,
    },
    {
      position: "TBD",
      name: "Alex Maya",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 64,
    },
    {
      position: "TBD",
      name: "Raul McPalm",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 65,
    },
    {
      position: "TBD",
      name: "Sebastian Medrano",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 66,
    },
    {
      position: "TBD",
      name: "Hector Mendez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 67,
    },
    {
      position: "TBD",
      name: "Miguel Angel Mendoza",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 68,
    },
    {
      position: "TBD",
      name: "Rodrigo Moreno",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 69,
    },
    {
      position: "TBD",
      name: "Octavio Emmanuel Muñoz Escamilla",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 70,
    },
    {
      position: "TBD",
      name: "Luis Alberto Munoz Rojas",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 71,
    },
    {
      position: "TBD",
      name: "Victor Najera",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 72,
    },
    {
      position: "TBD",
      name: "Victor Sanson Navez Lobera",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 73,
    },
    {
      position: "TBD",
      name: "Uzziel Ñurinda",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 74,
    },
    {
      position: "TBD",
      name: "Uriel Olivar",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 75,
    },
    {
      position: "TBD",
      name: "Misael Ortega Cruz",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 76,
    },
    {
      position: "TBD",
      name: "Jose Emiliano Osorio Jimenez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 77,
    },
    {
      position: "TBD",
      name: "Jose Pablo",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 78,
    },
    {
      position: "TBD",
      name: "Angel Padilla",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 79,
    },
    {
      position: "TBD",
      name: "Hassan Paz Perez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 80,
    },
    {
      position: "TBD",
      name: "Christopher Pérez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 81,
    },
    {
      position: "TBD",
      name: "Joaquín Pérez Zamudio",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 82,
    },
    {
      position: "TBD",
      name: "Francisco Plata",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 83,
    },
    {
      position: "TBD",
      name: "Cesar David Pliego Urias",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 84,
    },
    {
      position: "TBD",
      name: "Ricardo Puschel Niklitschek",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 85,
    },
    {
      position: "TBD",
      name: "Angel Quijano",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 86,
    },
    {
      position: "TBD",
      name: "Carlos Quiroz",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 87,
    },
    {
      position: "TBD",
      name: "Javier Ramirez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 88,
    },
    {
      position: "TBD",
      name: "Diego Ramírez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 89,
    },
    {
      position: "TBD",
      name: "Manuel Alejandro Ramírez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 90,
    },
    {
      position: "TBD",
      name: "Luis Alberto Ramirez Diaz",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 91,
    },
    {
      position: "TBD",
      name: "Luis Ramos",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 92,
    },
    {
      position: "TBD",
      name: "Enrique Reyes",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 93,
    },
    {
      position: "TBD",
      name: "Enrique Reyes Lira",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 94,
    },
    {
      position: "TBD",
      name: "Damian Reyes Sanchez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 95,
    },
    {
      position: "TBD",
      name: "Edgar Reza",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 96,
    },
    {
      position: "TBD",
      name: "Alberto Ricardo",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 97,
    },
    {
      position: "TBD",
      name: "Misael Rios",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 98,
    },
    {
      position: "TBD",
      name: "Javier Rocha",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 99,
    },
    {
      position: "TBD",
      name: "Alex Reynolds Rodriguez Cruz",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 100,
    },
    {
      position: "TBD",
      name: "Gerardo Rojano",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 101,
    },
    {
      position: "TBD",
      name: "Jorge Emilio Rojas Soto",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 102,
    },
    {
      position: "TBD",
      name: "Héctor Josué Rosales Martínez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 103,
    },
    {
      position: "TBD",
      name: "Joel Felipe Rosas Fonseca",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 104,
    },
    {
      position: "TBD",
      name: "Saturnino Ruano",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 105,
    },
    {
      position: "TBD",
      name: "Roberto Eduardo Ruiz Miranda",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 106,
    },
    {
      position: "TBD",
      name: "Francisco Michell Salinas González",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 107,
    },
    {
      position: "TBD",
      name: "Agustin Sanchez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 108,
    },
    {
      position: "TBD",
      name: "Jorge Sanchez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 109,
    },
    {
      position: "TBD",
      name: "Ivan Sanchez Montiel",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 110,
    },
    {
      position: "TBD",
      name: "Rodrigo Sebastian Sánchez Ramírez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 111,
    },
    {
      position: "TBD",
      name: "Antonio Santos",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 112,
    },
    {
      position: "TBD",
      name: "Manu Sánx",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 113,
    },
    {
      position: "TBD",
      name: "Jahir Sarmiento",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 114,
    },
    {
      position: "TBD",
      name: "Johan Sebastian",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 115,
    },
    {
      position: "TBD",
      name: "Inocencio Sinesio",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 116,
    },
    {
      position: "TBD",
      name: "Omar Soriano",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 117,
    },
    {
      position: "TBD",
      name: "Julio Soto",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 118,
    },
    {
      position: "TBD",
      name: "Alberto Taquex",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 119,
    },
    {
      position: "TBD",
      name: "Rodrigo de la Mora",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 120,
    },
    {
      position: "TBD",
      name: "Efrain Trejo Garcia",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 121,
    },
    {
      position: "TBD",
      name: "Gerado Treviño",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 122,
    },
    {
      position: "TBD",
      name: "Ivan Valdovinos Urquiza",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 123,
    },
    {
      position: "TBD",
      name: "Shari Vazni Bautista",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 124,
    },
    {
      position: "TBD",
      name: "Tyreck Velazquez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 125,
    },
    {
      position: "TBD",
      name: "Jesus Velazquez Maxil",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 126,
    },
    {
      position: "TBD",
      name: "Juan Carlos Vicente Hernández",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 127,
    },
    {
      position: "TBD",
      name: "Rodrigo Alegre",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 128,
    },
    {
      position: "TBD",
      name: "Jose Luis Yedra",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 129,
    },
    {
      position: "TBD",
      name: "Javier Zamarripa",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 130,
    },
    {
      position: "TBD",
      name: "Angel Zetina",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 131,
    },
    {
      position: "TBD",
      name: "Eduardo Carvajal Vargas",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 132,
    },
    {
      position: "TBD",
      name: "Miguel Espinoza",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 133,
    },
    {
      position: "TBD",
      name: "Arturo Galicia",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 134,
    },
    {
      position: "TBD",
      name: "Joaquín Pérez Zamudio",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 135,
    },
    {
      position: "TBD",
      name: "Josep Villalobos",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 136,
    },
    {
      position: "TBD",
      name: "Omar Olivares",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 137,
    },
      {
      position: "TBD",
      name: "Heriberto Trejo",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 138,
    },
  ];
  const femaleParticipants = [
    {
      position: "TBD",
      name: "Nayeli Acevedo",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 1,
    },
    {
      position: "TBD",
      name: "Fernanda Alva",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 2,
    },
    {
      position: "TBD",
      name: "Ana Baquero",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 3,
    },
    {
      position: "TBD",
      name: "Alexandra Coria",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 4,
    },
    {
      position: "TBD",
      name: "Brenda Cortes",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 5,
    },
    {
      position: "TBD",
      name: "Noelia Delgadillo",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 6,
    },
    {
      position: "TBD",
      name: "Rocio Escamilla",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 7,
    },
    {
      position: "TBD",
      name: "Nathalia Fuentes Martínez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 9,
    },
    {
      position: "TBD",
      name: "Mariana Gonzalez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 11,
    },
    {
      position: "TBD",
      name: "Carolina Leiva Vidal",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 13,
    },
    {
      position: "TBD",
      name: "Shumali Lopez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 14,
    },
    {
      position: "TBD",
      name: "Carolina Lopez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 15,
    },
    {
      position: "TBD",
      name: "Valerya Lozano",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 16,
    },
    {
      position: "TBD",
      name: "Dafne Mejia",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 17,
    },
    {
      position: "TBD",
      name: "Raim Perez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 20,
    },
    {
      position: "TBD",
      name: "Elena Pérez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 21,
    },
    {
      position: "TBD",
      name: "Daniela Pérez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 22,
    },
    {
      position: "TBD",
      name: "Lezly Pineda",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 23,
    },
    {
      position: "TBD",
      name: "Laura Olivia Wences Martinez",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 24,
    },
    {
      position: "TBD",
      name: "Alejandra Medina",
      finishTime: "TBD",
      distance: "TBD",
      listEntry: 25,
    },
  ];

  const handleSelect = (e) => {
    let sortedParticipants = maleParticipants;
    if (e === "maleParticipants") {
      sortedParticipants = maleParticipants.sort(
        (a, b) => a.listEntry - b.listEntry
      );
      setCat(sortedParticipants);
    }
    if (e === "femaleParticipants") {
      sortedParticipants = femaleParticipants.sort(
        (a, b) => a.listEntry - b.listEntry
      );
      setCat(sortedParticipants);
    }
  };
  return (
    <div className="brevet-container">
      <Container>
        <Row>
          <Col className="flyer-container">
            <Image src={brevet2025Img} />
          </Col>
        </Row>
        <Row>
          <Col className="flyer-container">
            <p>
              Tenemos el placer de anunciar la segunda edición de uno de los
              Brevets mas exigentes de Le Tour de Frankie. La ruta, reconocida
              como una de las más emblemáticas de México, comenzará en la Ciudad
              de México y atravesará el estado de Morelos, cubriendo una
              distancia de 278 km con más de 5200 metros de ascenso acumulado
              para terminar en el iconico estadio de Ciudad Universitaria.
              <ul>
                <li>
                  Cuando: 16 de noviembre 2025, Zócalo cdmx Salida: 1:00 am
                </li>
                <li>Tiempo límite: 17 Horas (18:00 hrs, 6:00 pm)</li>
                <li>
                  Nivel : Para mantener el espíritu de los eventos de ciclismo
                  de ultra distancia, alentamos a los participantes a ser
                  autosuficientes
                </li>
                <li>
                  Todos los recorridos deberán de ser registrados en Strava
                </li>
                <li>
                  Costo: No tiene costo pero si habra registro, cupo limitado
                </li>

                <li>
                  Requisitos : Bicicleta en perfecto estado mecánico Kit de
                  herramientas Reflejante Luces delantera y trasera <br />{" "}
                  Cualquier tipo de bicicleta ( no eléctricas o asistidas){" "}
                  <br />
                  Cuenta de Strava (se calificará el recorrido mediante la
                  aplicación)
                </li>
                <li>
                  Es necesario estudiar bien la ruta para poder considerar
                  puntos de regreso en caso de no poder continuar con el
                  recorrido(transporte publico para ti y tu bici)
                </li>
                <li>
                  El recorrido no cuenta con caminos cerrados para los
                  participantes, es una ruta que requiere gran resisten fisica
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
              <Dropdown.Item eventKey="maleParticipants">
                Masculino
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <Row>
            <Col>
              {" "}
              <Table responsive striped bordered hover variant="dark" size="sm">
                <thead>
                  <tr>
                    <th>Race Number</th>
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
                        <td key={Math.random()}>{participant.listEntry}</td>
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

export default BrevetNovember;
