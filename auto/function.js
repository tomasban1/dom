export function carSale(autoData) {
    let skelbimaiHTML = '';
    for (const data of autoData) {
        skelbimaiHTML += `
        <article>
            ${data.foto}
            <h2>${data.name}</h2>
            <p>${data.year}</p>
            <p>${data.engine}</p>
            <p>${data.type}</p>
            <p>${data.fuel}</p>
            <p class="desc">${data.desc}</p>
            <a href="${data.info}" target="_blank">Sužinoti daugiau...</a>
            <p>${data.price}</p>
        </article>`
    }
    return `<main>${skelbimaiHTML}</main>`
}