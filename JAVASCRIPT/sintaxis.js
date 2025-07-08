// comentarios deshabilitar lineas

/*
    multi
    lineas
*/

//imrpresiones en consola
console.log("Hola Mundo");

// Variables y constantes
let variable = "Carlos";
//var variablecita = "VR"

const numero = 3.1416;
console.log(numero);
//concatenacion
console.log("Hola" + variable);

console.log("5" + 5)

//cambiar los tipos de valores o variables
//parse
let cinco = parseInt("5");
console.log(cinco + 5);

//operadores matematicos 
let suma = 5 + 5;
let resta = 10 - 5;
let division = 4 / 2;
let multiplicacion = 2 * 2;
let modulo = 10 % 2;

//operadores logicos 
// OR = ||  AND = &&  NOT = ! 

//operadores de comparacion
//igualdad, desigualdad
let igualdad = "5" == 5; 
let igualdadEstricta = "5" === 5; 
console.log(igualdadEstricta);



if (false){
    console.log("Esto funciona");
}
else if (true){
    console.log("Esto no funciona");
}

switch(opcion){
    case 1:
        console.log("Se comunico con Administracion");
        break;
    
    default:
            console.log("Opcion no valida");
}

//ternaria
condicion ? "caso true" : "caso false";

//estructuras repetitivas o bules

contador = 0;
while (contador < 5 || contador > 0 ){
    console.log(contador);
    contador++;
}

contador = 0;
do {
    console.log(contador);
    contador++;
}while (contador < 5 && contador > 0);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

function saludar(){
    console.log("Hola desde una funcion");
}

const funcioncita = function () {
    console.log("Soy anonimo");
};

funcioncita();

const funcionFlecha = () => {
    console.log("Soy anonimo");
}
funcionFlecha();

