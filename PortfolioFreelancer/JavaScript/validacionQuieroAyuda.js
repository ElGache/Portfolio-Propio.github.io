// Validación de quieroAyudaForm
const formularioQA = document.getElementById("formularioQA");

const datosQA = {
    nameQA: '', // Cambiar a 'nameQA'
    proyectQA: '', // Cambiar a 'proyectQA'
    mensajeQA: '' // Cambiar a 'mensajeQA'
};

const nameQA = document.getElementById('nameQA'); // Cambiar a 'nameQA'
const proyectQA = document.getElementById('proyectQA'); // Cambiar a 'proyectQA'
const mensajeQA = document.getElementById('mensajeQA'); // Cambiar a 'mensajeQA'

nameQA.addEventListener('input', leerTextoQA);
proyectQA.addEventListener('input', leerTextoQA);
mensajeQA.addEventListener('input', leerTextoQA);

function leerTextoQA(e) {
    datosQA[e.target.id] = e.target.value;
}

formularioQA.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulamos el envío del formulario mostrando los datos en la consola
    console.log("Datos del formulario:", datosQA);
});

formularioQA.addEventListener('submit', function (e) {
    e.preventDefault();

    // Comprobar que no haya campos de datos vacíos
    const { nameQA, proyectQA, mensajeQA } = datosQA; // Cambiar a 'nameQA', 'proyectQA' y 'mensajeQA'

    // Si un campo está vacío, mostrar error
    if (nameQA === "" || proyectQA === "" || mensajeQA === "") { // Cambiar a 'nameQA', 'proyectQA' y 'mensajeQA'
        mensajeEnviarQA("Todos los campos son obligatorios", 'error');
        return;
    }

    // Si todo está correcto enviar y mostrar mensaje de enviado
    mensajeEnviarQA("Mensaje enviado correctamente", 'ok');
});

const mensajeEnviarQA = (mensaje, clase) => {
    const mostrar = document.createElement('p');
    mostrar.textContent = mensaje;
    mostrar.classList.add(clase);
    formularioQA.appendChild(mostrar);
    setTimeout(() => {
        mostrar.remove();
    }, 2000);
};
