//peticiones asincronas

// 3 estados == pending, response, rejected

console.log("Holiwis");

//sim de peticion api
function getCoach(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, name: "Carlos" })
            } else {
                reject("No se encontro ese coach")
            }
        }, 2000);
    })
}



//manejo de asincronismo
function traerDatos() {
    getCoach(3)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

traerDatos();

//async y await 
async function obtenerDatos() {
    try {
        const coach = await getCoach(1);
        console.log(coach);
    }
    catch (error) {
        console.log(console.error(error));
    }

}

obtenerDatos();

//FETCH == interfaz para peticiones http
async function getDittoAwait() {
    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
        console.log(respuesta);
        let cuerpo = respuesta.json();
        console.log(cuerpo);
    } catch (error) {
        console.error(error);

    }

}
getDittoAwait();

function getDittoThen() {
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
        .then((data) => {
            console.log(data);
            return data.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });

}

getDittoThen();

function saludar() {
    console.log("Hola, mundo!");
    
}