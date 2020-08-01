import {obtenerChiste} from './http-providers';

const body = document.body;
let btnOtro, olList;


const crearChisteHtml = () => {

    const html = `
    
        <h1 class="mt-5">Chiste</h1>
        <hr>

        <button class="btn btn-primary"> Otro chiste</button>

        <ol class="mt-2 list-group">
            
        </ol>

    `

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);

}

const evento = () => {

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {
        btnOtro.disabled = true;
        dibujarChite( await obtenerChiste() );
        btnOtro.disabled = false;
    });

}

//  chiste {id, value}
const dibujarChite = (chiste) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${ chiste.id }: ${ chiste.value }</b>`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);

}


export const init = () => {
    crearChisteHtml();
    evento();
}