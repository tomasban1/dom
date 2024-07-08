import { headerAuto, headerData } from "../index.js";
import { autoData } from "./data.js";
import { carSale } from "./function.js";

const headerDOM = document.querySelector('header');
headerDOM.innerHTML = headerAuto(headerData);


const mainDOM = document.getElementById('cars');
mainDOM.innerHTML = carSale(autoData);
