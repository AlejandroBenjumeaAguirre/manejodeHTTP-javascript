
const jokerUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloudPreset = 'ijs3lpjs';
const urlCloudinari = 'https://api.cloudinary.com/v1_1/dhcrbvzir/upload';

const obtenerChiste = async() => {

    try{

        const resp = await fetch(jokerUrl);

        if(!resp.ok) throw 'No se pudo realizar la petición';

        const { icon_url, id, value } = await resp.json();

        return { icon_url, id, value };

    }catch(err){
        return err;
    }

}


const obtenerUsuarios = async() => {

    const resp = await fetch(urlUsuarios);
    const {data:usuarios} = await resp.json();

    console.log(usuarios);

    return usuarios;

}

// Subir archivos
const subirArchivo = async( archivoSubir ) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try{
        const resp = await fetch(urlCloudinari, {
            method: 'POST',
            body: formData
        });

        if( resp.ok ){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }

    }catch(err){
        throw err;
    }

}


export {
    obtenerChiste,
    obtenerUsuarios,
    subirArchivo
}