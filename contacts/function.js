import { pokemonList } from "./data.js";

const mainDOM = document.querySelector('main');

export function pokemon(pokemonList) {
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
    return `<main>${pokemonDOM}</main>`
}

