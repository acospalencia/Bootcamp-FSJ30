import { useState } from 'react';


function Saludo({nombre, apellido}) {

  const [nombreCurso, setNombreCurso] = useState("FSJ30")
  return (
    <>
      <h1>Hola, {nombre} {apellido}!</h1>

      <h2>Curso: {nombreCurso}</h2>
      <button onClick={() => setNombreCurso("Java30")}>Magia</button>
    </>
  );
}

export default Saludo;
