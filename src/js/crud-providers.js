const url = 'https://reqres.in/api/users';


const getUsuario = async(id) => {

    const res = await fetch(`${url}/${id}`);
    const {data} = await res.json();

    return data;
    
}

const postUsuario = async(usuario) => {

    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

const actualizarUsuario = async(id, usuario) => {

    const resp = await fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

const borrarUsuario = async(id) => {

    const resp = await fetch(`${url}/${id}`,
    {
        method: 'DELETE'
    });

    return ( resp.ok ) ? 'Borrado' : 'No se pudo borrar ';

}


export {
    getUsuario,
    postUsuario,
    actualizarUsuario,
    borrarUsuario,
}