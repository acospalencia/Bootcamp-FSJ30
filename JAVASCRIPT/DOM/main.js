console.log("holas")

//obtener elemento del frontend
let elementoDOM = document.getElementById("textoSaludo");
console.log(elementoDOM);

let contenidoDOM = document.querySelector("#contenido");
console.log(contenidoDOM);

const btnApretable = document.querySelector("#btnApretable")

const btnArraycito = document.getElementById('btnArraycito')

console.log(elementoDOM.innerHTML);
console.log(elementoDOM.innerText);

elementoDOM.innerHTML = "<h2>Caramba</h2>"

contenidoDOM.innerHTML = "<h2>Caramba inyectado con js</h2>"

btnApretable.addEventListener('click', () => {
    alert('Abra kadabra')
    console.log("Furula el boton");
    let dato = prompt("Ingresa tu nombre")
    console.log(dato);
        
})

let array = [1,2,3]

//localstorage -> almacenamiento local del navegador
localStorage.setItem('array', JSON.stringify(array))
console.log(localStorage.getItem('array'));


btnArraycito.addEventListener('click', () => {
    console.log("estoy andando");
    array.push(4)
    console.log(array);
    
})
