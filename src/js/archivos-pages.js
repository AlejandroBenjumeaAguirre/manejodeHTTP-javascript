import { subirArchivo } from './http-providers';

const body = document.body;
let inputFile, imgFoto;


const crearInputFileHTML = () => {

    const html = `
        <h1 class="mt-5"> Subir Archivo </h1>
        <hr>

        <label>Seleccionar fotografia: </label>
        <input type="file" accept="image/png image/jpeg">

        <br>
        <img id="foto" class="img-thumbnail" src="">
        `

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);

    inputFile = document.querySelector('input');
    imgFoto   = document.querySelector('#foto');

}

const evento = () => {

    inputFile.addEventListener('change', (evento) => {

        const file = evento.target.files[0];

        // console.log(file);

        subirArchivo(file).then( url => imgFoto.src = url);
    });

}



export const init = () => {
    crearInputFileHTML();
    evento();
}