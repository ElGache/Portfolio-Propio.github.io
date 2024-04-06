fetch('./json/proyectos.json') // recoge los datos del json
.then(response => response.json()) // crea respuesta y transforma a .json
.then(data => {// data es la variable que va a a llevar todos los datos
    let output1 = ''; // cada output es una salida para separar los json y que adopten los estilos de cada 'proyecto-flex'
    let output2 = '';
    for(let i = 0; i < data.length; i++){ // recorre todos los objetos json de 'data' como si fuera un array
        let output = ` 
        <div class="proyecto">
            <img src="./IMG/${data[i].img}" alt="">
            <div class="underphoto">
                <h5>${data[i].titulo}</h5>
                <a href="${data[i].enlace}">VER</a>
            </div>
        </div>
        `; // la variable output es el resultado de como se va a ver cada objeto json de 'data'
        if (i < 2) { // coje los dos primeros json y los mete en el primer output
            output1 += output;
        }else { // same pero con los dos ultimos
            output2 += output;
        }
    }
    document.querySelector('.proyectos-flex1').innerHTML = output1; // aplica los estilos de cada 'proyecto-flex'
    document.querySelector('.proyectos-flex2').innerHTML = output2;
})                