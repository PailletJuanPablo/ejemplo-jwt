
// Verificar si tengo en localStorage el token
// Agregarlo a los headers de la petición

const makeUserRequest = async () => {

    const token = localStorage.getItem('token');
    if (!token) {
        return false
    }
    axios.defaults.headers.common['authorization'] = token;

    try {
        const response = await axios.get('http://localhost:3000/api/auth/me');

        document.querySelector('h1').innerHTML += response.data.name;
    } catch (error) {
        console.error(error)
    }


}

window.addEventListener('load', () => makeUserRequest())