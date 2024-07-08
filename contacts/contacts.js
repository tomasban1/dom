import { pokemonList } from "./data.js";
import { pokemon } from "./function.js";

const innitialElementDOM = document.getElementById('innitialElement');
innitialElementDOM.innerHTML = `
<header>
<img src="#" alt="Logo">
<nav>Nav</nav>
</header>
<main>Main</main>
<footer>Footer</footer>`;

const navDOM = document.querySelector('nav');

const mainLinksData = [
    {
        text: 'Home',
        link: '../',
    },
    {
        text: 'Products',
        link: '../products/',
    },
    {
        text: 'About us',
        link: '../about-us/',
    },
    {
        text: 'Contacts',
        link: '../contacts/',
    },
    {
        text: 'Sportas',
        link: '../sportas/',
    },
    {
        text: 'Auto',
        link: '../auto/',
    },
];

let navHTML = '';

for (const linksData of mainLinksData) {
    if (linksData.text === 'Contacts') {
        navHTML += `<a class="link active" href="${linksData.link}">${linksData.text}</a>`;
    } else {
        navHTML += `<a class="link" href="${linksData.link}">${linksData.text}</a>`;
    }
}
navDOM.innerHTML = navHTML;

const mainDOM = document.querySelector('main');
mainDOM.innerHTML = pokemon(pokemonList);


