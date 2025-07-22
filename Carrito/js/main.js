//console.log("heil hittler");

let cursosCarrito = [];

const contenedorCarrito = document.getElementById("cuerpo-carrito");

function vaciarCarrito(evento){
    console.log("se vacio el cayito");
    
}

function agregarCurso(evento){
    console.log("Se agrego un curso");
    let curso = leerDatosCursos(evento.target.parentElement.parentElement)
    console.log(curso);
    cursosCarrito.push(curso);
    console.log(cursosCarrito);
    llenarCarro();
}

function leerDatosCursos(curso) {
    console.log(curso);
    console.log(curso.querySelector("img").src);
    console.log(curso.querySelector("h4").textContent);
    console.log(curso.querySelector("h5").textContent);

    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector("h5").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    return infoCurso;
}

function llenarCarro(){
    contenedorCarrito.innerHTML = "";

    cursosCarrito.map((curso) =>{
        
        let fila = document.createElement("tr");

        fila.innerHTML = `
        <td><img src="${curso.imagen}" width="80" /></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><button class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</button></td>
        `


        contenedorCarrito.appendChild(fila);
    });
};

llenarCarro();