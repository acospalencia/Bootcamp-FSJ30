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