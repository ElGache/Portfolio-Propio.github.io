// const contacto = document.querySelector(".contacto-h2")
// const contactoHidden = document.querySelector(".contacto-des-act")
// const contactoV = document.querySelector(".contacto-act")

// const quieroAyuda = document.querySelector(".quieroAyuda h2")
// const quieroAyudaHidden = document.querySelector(".quieroAyuda-des-act")
// const quieroAyudaV = document.querySelector(".quieroAyuda-act")

// contacto.addEventListener("click", e=> {
//     contactoHidden.classList.toggle("active")
// })








// const botonContacto = document.getElementById('contacto-titulo')
// const botonQuieroAyuda = document.getElementById('quieroAyuda-titulo')

// document.querySelector('contacto-h2').classList.add('actives')
// document.querySelector('quieroAyuda-h2').classList.add('desactives')


// //PULSA EN CONTACTO
// botonContacto.addEventListener('click', function () {
//     document.querySelector('.contacto-act').classList.toggle('actives')
//     document.querySelector('.contacto-h2').classList.toggle('actives')

//     if(document.querySelector('.contacto-h2').classList.contains('actives')){
//         document.querySelector('quieroAyuda-h2').classList.add('desactives')
//     }
    
//     document.querySelector('.quieroAyuda-h2').classList.toggle('desactives')
//     document.querySelector('.quieroAyuda-desact').classList.toggle('desactives')
// });

// //PULSA EN QUIEROAYUDA
// botonQuieroAyuda.addEventListener('click', function(){
//     document.querySelector('.quieroAyuda-act').classList.toggle('actives')
//     document.querySelector('.quieroAyuda-h2').classList.toggle('actives')

//     if(document.querySelector('.quieroAyuda-h2').classList.contains('actives')){
//         document.querySelector('contacto-h2').classList.add('desactives')
//     }

//     document.querySelector('.contacto-h2').classList.toggle('desactives')
//     document.querySelector('.contacto-desact').classList.toggle('desactives')
// })





















const botonContacto = document.getElementById('contacto-titulo')
const botonQuieroAyuda = document.getElementById('quieroAyuda-titulo')
const contactoH2 = document.querySelector('.contacto-h2')
const quieroAyudaH2 = document.querySelector('.quieroAyuda-h2')
const contactoForm = document.querySelector('.contactoForm')
const quieroAyudaForm = document.querySelector('.quieroAyudaForm')

// Agregar clases iniciales
contactoH2.classList.add('actives')
quieroAyudaH2.classList.add('desactives')
contactoForm.classList.add('actives')
quieroAyudaForm.classList.add('desactives')

//PULSA EN CONTACTO
botonContacto.addEventListener('click', function () {

    // Si contactoH2 no tiene la clase 'actives', agregala y elimina 'desactives' de quieroAyudaH2
    if (!contactoH2.classList.contains('actives')) {
        contactoH2.classList.add('actives')
        quieroAyudaH2.classList.remove('actives')
    }
    
    if(!contactoForm.classList.contains('actives')){
        contactoForm.classList.add('actives')
        quieroAyudaForm.classList.remove('actives')
        quieroAyudaForm.classList.add('desactives')
    }

    if(contactoForm.classList.contains('desactives')){
        contactoForm.classList.remove('desactives')
    }
    
})

//PULSA EN QUIEROAYUDA
botonQuieroAyuda.addEventListener('click', function(){
    
    // Si quieroAyudaH2 no tiene la clase 'actives', agregala y elimina 'desactives' de contactoH2
    if (!quieroAyudaH2.classList.contains('actives')) {
        quieroAyudaH2.classList.add('actives')
        contactoH2.classList.remove('actives')
    }

    if(!quieroAyudaForm.classList.contains('actives')){
        quieroAyudaForm.classList.add('actives')
        contactoForm.classList.remove('actives')
        contactoForm.classList.add('desactives')
    }

    if(quieroAyudaForm.classList.contains('desactives')){
        quieroAyudaForm.classList.remove('desactives')
    }
    
    
})