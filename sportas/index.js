
import { headerAuto, headerData } from "../index.js";
import { renderSportTablet } from "../js/sportas.js"
import { basketballdata } from "./data/basketball.js";
import { footballdata } from "./data/football.js";

const headerDOM = document.querySelector('header');
headerDOM.innerHTML = headerAuto(headerData);


const appDom = document.getElementById('app');
appDom.innerHTML = renderSportTablet(basketballdata);

const appDom2 = document.getElementById('app2');
appDom2.innerHTML = renderSportTablet(footballdata);