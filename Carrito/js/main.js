//console.log("hola mundo");

let cursosCarrito = [];

const contenedorCarrito = document.getElementById("cuerpo-carrito");

function vaciarCarrito(evento) {
    console.log("se vacio el cayito");

    cursosCarrito = [];
    contenedorCarrito.innerHTML = '';

}

function agregarCurso(evento) {
    console.log("Se agrego un curso");
    let curso = leerDatosCursos(evento.target.parentElement.parentElement)

    const existe = cursosCarrito.some((cursoArr) => cursoArr.id == curso.id);

    if (existe) {
        cursosCarrito.map((cursoArr) => {
            if (cursoArr.id === curso.id) {
                cursoArr.cantidad += 1;
                cursoArr.precio = cursoArr.precio.substring(1);
                curso.precio = curso.precio.substring(1);

                cursoArr.precio = parseFloat(cursoArr.precio);
                curso.precio = parseFloat(curso.precio);
                cursoArr.precio += curso.precio;

                cursoArr.precio = `$${cursoArr.precio}`
                return cursoArr;
            }
        })
    }
    else {
        cursosCarrito.push(curso);
    }

    console.log(curso);
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

function eliminarCurso(idCurso) {
    const cursoAEliminar = cursosCarrito.findIndex((cursoId) => cursoId.id === String(idCurso));

    if (cursoAEliminar !== -1) {
        cursosCarrito.splice(cursoAEliminar, 1);
        
        console.log('Curso eliminado:', idCurso);
    } else {
        console.warn('No se encontró el curso con ID:', idCurso, cursoAEliminar);
    }

    console.log(cursosCarrito);
    llenarCarro()

}

function llenarCarro() {
    contenedorCarrito.innerHTML = "";

    cursosCarrito.map((curso) => {

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