
const titleDom = document.querySelector('title');
export const headerData = [
    {
        name: 'Home',
        dir: './',
    },
    {
        name: 'Products',
        dir: './products/',
    },
    {
        name: 'About us',
        dir: './about-us/',
    },
    {
        name: 'Contacts',
        dir: './contacts/',
    },
    {
        name: 'Sportas',
        dir: './sportas/',
    },
    {
        name: 'Auto',
        dir: './auto/',
    },

];

export function headerAuto(headerData) {
    let headerHTML = '';

    for (const data of headerData) {
        if (titleDom.innerText === 'Home') {
            headerHTML += `<a href="${data.dir}">${data.name}</a>`
        } else {
            headerHTML += `<a href=".${data.dir}">${data.name}</a>`
        }

    }

    return `<nav>${headerHTML}</nav>`
}

const headerDOM = document.querySelector('header');
headerDOM.innerHTML = headerAuto(headerData);