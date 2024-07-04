const h1DOM = document.getElementById('antraste');
console.log(h1DOM);
const pDOM = document.getElementsByTagName('p');
console.log(pDOM);
console.clear();

const ulDOM = document.getElementsByTagName('ul')
let index = 1;
for (const list of ulDOM) {
    const liDOM = list.getElementsByTagName('li');

    for (const item of liDOM) {
        item.innerText = `${index++}) ${item.innerText}`
    }
}



const pomidoroVaikaiDOM = document
    .getElementById('darzas')
    .querySelectorAll('.pomidoras > li');
console.log(pomidoroVaikaiDOM);