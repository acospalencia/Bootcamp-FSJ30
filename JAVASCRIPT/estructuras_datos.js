//estructuras de datos

//datos primitivos
let vacio = null;
console.log(vacio);

vacio = "string re estandar"
console.log(vacio);

//objetos
//objeto literales
let perro = {
    //clave : valor
    nombre: "Firulais",
    edad: 5,
}

//mostrar caracteristicas del objeto
console.log(perro.nombre);

//poo
class persona {
    constructor(nombreParam, edadParam) {
        this.nombre = nombreParam;
        this.edad = edadParam;
    }

    correr(){
        console.log("Estoy corriendo");
    }
}

//Utilizar el contructor de persona  -> Instanciar objetos
let personita = new persona("carlos", 30);
console.log(personita);
personita.correr();



class Programador extends persona {
    constructor(nombreParam, edadParam, lenguajeParam) {
        super(nombreParam, edadParam); //llama al constructor de la clase padre
        this.lenguajesProgra = lenguajeParam;
    }

    codear(){
        console.log("Estoy codeando");
        
    }

    correr() {
        super.correr(); //llama al metodo correr de la clase padre
        console.log("No corro tan rapido, pero puedo trotar");
        
    }
}

let programador = new Programador("carlos", 30, "JavaScript");
console.log(programador);
programador.nombre = "Carlos el programador";
console.log(programador);
programador.correr();

//Arrays
let arraicitoIdx = [18, 19, 25, 33];
console.log(arraicitoIdx[0]); 

//"Array asociativo"
let arrayAsociativo = {
    nombre: "Carlos"
};

console.log(arrayAsociativo["nombre"]); 

let arracitoMulti = [
    [1, 2, 3], [{nombre: "Carlos"}]
];

console.log(arracitoMulti[1][0]["nombre"])

let cajaIdiceCero = arracitoMulti[0];
console.log(cajaIdiceCero[1]);

let cajaIndiceUno = arracitoMulti[1];

console.log(cajaIndiceUno[0]);
console.log(cajaIndiceUno[0].nombre);

//let nombres = ["Carlos", "Juan", "Pedro"];
nombres.forEach((value, index) => {
    console.log(index);
    
    console.log(value);
});

let nombres = ["Carlos", "Juan", "Pedro"];
const nombresmayusculas = nombres.map((value) => {
    return value.toUpperCase();
});

console.log(nombresmayusculas);


let numeros = [1, 2, 3, 4, 5];
let numerosPorDos = numeros.map((value) => {
    return value * 2;
});
console.log(numerosPorDos);

let arrayNumerico = [1, 2, 3, 4, 5];

arrayNumerico.forEach((value, index, array) => {
    if (index + 1 < array.length) {
        console.log(array[index + 1]);
        
    }
});

const usuarios = [{
    nombre : "carlos", 
    edad : 20
},{
    nombre : "juan", 
    edad : 24
},{
    nombre : "alejandra", 
    edad : 21
}]

const mayorDe21 = usuarios.filter((value) => {
    return value.edad > 21;
})
console.log(mayorDe21);

const usuarioCarlos = usuarios.find( usuario => usuario.nombre === "Carlos");

console.log(usuarioCarlos);


