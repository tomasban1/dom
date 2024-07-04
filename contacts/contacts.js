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

const pokemonList = [
    {
        image: '<img src="./img/Zekrom-new.webp" alt"Image">',
        imageSource: 'https://static.wikia.nocookie.net/pokemon/images/8/81/644Zekrom.png/revision/latest?cb=20220612222140',
        name: 'Zekrom',
        color: '<strong>Color:</strong> Black',
        form: '<strong>Form:</strong> Long',
        type: "<strong>Type:</strong> Dragon & Electric",
        link: 'https://pokemon.fandom.com/wiki/Zekrom?so=search',
    },
    {
        image: '<img src="./img/Ho-Oh-new.webp" alt"Image">',
        imageSource: 'https://static.wikia.nocookie.net/pokemon/images/6/67/250Ho-Oh.png/revision/latest?cb=20140329015839',
        name: 'Ho-Oh',
        color: '<strong>Color:</strong> Red',
        form: '<strong>Form:</strong> Long',
        type: "<strong>Type:</strong> Fire & Flying",
        link: 'https://pokemon.fandom.com/wiki/Ho-Oh?so=search',
    },
    {
        image: '<img src="./img/025Pikachu.webp" alt="Image">',
        imageSource: 'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest?cb=20240513043021',
        name: 'Pikachu',
        color: '<strong>Color:</strong> Yellow',
        form: '<strong>Form:</strong> Small',
        type: "<strong>Type:</strong> Electric",
        link: 'https://pokemon.fandom.com/wiki/Pikachu?so=search',
    },
    {
        image: '<img src="./img/001Bulbasaur.webp" alt="Image">',
        imageSource: 'https://static.wikia.nocookie.net/pokemon/images/2/21/001Bulbasaur.png/revision/latest?cb=20240505013758',
        name: 'Bulbasaur',
        color: '<strong>Color:</strong> Green',
        form: '<strong>Form:</strong> Small',
        type: "<strong>Type:</strong> Grass/Poison",
        link: 'https://pokemon.fandom.com/wiki/Bulbasaur?so=search',
    },
    {
        image: '<img src="./img/249Lugia.webp" alt="Image">',
        imageSource: 'https://static.wikia.nocookie.net/pokemon/images/4/44/249Lugia.png/revision/latest?cb=20140329015839',
        name: 'Lugia',
        color: '<strong>Color:</strong> Blue',
        form: '<strong>Form:</strong> Wide',
        type: "<strong>Type:</strong> Psychic & Flying",
        link: 'https://pokemon.fandom.com/wiki/Lugia?so=search',
    },
    {
        image: '<img src="./img/384Rayquaza.webp" alt="Image">',
        imageSource: 'https://static.wikia.nocookie.net/pokemon/images/e/e4/384Rayquaza.png/revision/latest?cb=20210820005232',
        name: 'Rayquaza',
        color: '<strong>Color:</strong> Green',
        form: '<strong>Form:</strong> Long',
        type: "<strong>Type:</strong> Dragon & Flying",
        link: 'https://pokemon.fandom.com/wiki/Rayquaza?so=search',
    },
    {
        image: '<img src="./img/487Giratina.webp" alt="Image">',
        imageSource: 'https://static.wikia.nocookie.net/pokemon/images/0/0b/487Giratina.png/revision/latest?cb=20140517143822',
        name: 'Giratina',
        color: '<strong>Color:</strong> Black',
        form: '<strong>Form:</strong> Long',
        type: "<strong>Type:</strong> Ghost & Dragon",
        link: 'https://pokemon.fandom.com/wiki/Giratina?so=search',
    },
    {
        image: '<img src="./img/151Mew.webp" alt="Image">',
        imageSource: 'https://static.wikia.nocookie.net/pokemon/images/b/b1/151Mew.png/revision/latest?cb=20240522163403',
        name: 'Mew',
        color: '<strong>Color:</strong> Pink',
        form: '<strong>Form:</strong> Small',
        type: "<strong>Type:</strong> Psychic",
        link: 'https://pokemon.fandom.com/wiki/Mew?so=search',
    },
    {
        image: '<img src="./img/006Charizard.webp" alt="Image">',
        imageSource: 'https://static.wikia.nocookie.net/pokemon/images/7/7e/006Charizard.png/revision/latest?cb=20240515074209',
        name: 'Charizard',
        color: '<strong>Color:</strong> Orange',
        form: '<strong>Form:</strong> Big',
        type: "<strong>Type:</strong> Dragon",
        link: 'https://pokemon.fandom.com/wiki/Charizard',
    },
    {
        image: '<img src="./img/448Lucario.webp" alt="Image">',
        imageSource: 'https://static.wikia.nocookie.net/pokemon/images/d/d7/448Lucario.png/revision/latest?cb=20240417062333',
        name: 'Lucario',
        color: '<strong>Color:</strong> Black/Blue',
        form: '<strong>Form:</strong> Average',
        type: "<strong>Type:</strong> Steel/Figting",
        link: 'https://pokemon.fandom.com/wiki/Lucario',
    },
];

let pokemonDOM = '';
for (const pokeList of pokemonList) {
    pokemonDOM += `
        <article>
            ${pokeList.image}
            <a class="imgLink"href="${pokeList.imageSource}" target="_blank">Picture link</a>
            <h2>${pokeList.name}</h2>
            <p>${pokeList.color}</p>
            <p>${pokeList.form}</p>
            <p>${pokeList.type}</p>
            <a href="${pokeList.link}" target="_blank">Read more...</a>
        </article>`
}
mainDOM.innerHTML = pokemonDOM