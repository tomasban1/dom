import { headerAuto, headerData } from "../index.js";

const headerDOM = document.querySelector('header');
headerDOM.innerHTML = headerAuto(headerData);











const formDOM = document.getElementsByTagName('form')[0];
formDOM.innerHTML = `<button type="button">Click me</button>`;

const contentDOM = document.getElementById('content');
const ulDOM = contentDOM.querySelector('.productsList')



const products = [
    {
        title: 'Duona',
        count: 1,
    },
    {
        title: 'Sviestas',
        count: 1,
    },
    {
        title: 'Pomidoras',
        count: 3,
    },
    {
        title: 'Agurkas',
        count: 1,
    },
    {
        title: 'Grietinė',
        count: 2,
    },
    {
        title: 'Arbata',
        count: 1,
    },
];

let HTML = '';

for (let i = 0; i < products.length; i++) {
    HTML += `
        <li>
            <p class="title">${products[i].title}</p>
            <p class="count">${products[i].count}</p>
            <a href="#">Click me</a>
        </li>`;
}

ulDOM.innerHTML = HTML;