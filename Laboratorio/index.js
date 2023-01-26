const parrafoNombre = document.querySelector("div.nombre p");
const parrafoEmail = document.querySelector("div.email p");
const parrafoclave = document.querySelector("div.clave p");
const parrafoClaveConfirm = document.querySelector("div.claveConfirm p");


const inputNombre = document.querySelector('div.nombre input');
const inputEmail = document.querySelector('div.email input');
const inputClave = document.querySelector('div.clave input');
const inputClaveConfirm = document.querySelector('div.claveConfirm input');

const todos = document.querySelectorAll('input');




function pulsaBoton(e) {

    

    let formularioValido = true;

    restablecerInput();

    nombre = document.getElementById('nombre').value;
    email = document.getElementById('email').value;
    clave = document.getElementById('clave').value;
    claveConfirm = document.getElementById('claveConfirm').value;

    let tieneNumero = new RegExp('[0-9]', 'g');
    let mailCorrecto = /^[\w.]+@([\w-]+.)+[\w-]{2,4}$/;

    const inputss = nombre.parentElement;

    if (nombre.trim().length < 1) {

        parrafoNombre.className = "mensaje__error"
        parrafoNombre.innerHTML = "Rellene este campo"
        inputNombre.className = "input_error";
        formularioValido = false;
    } else if (tieneNumero.test(nombre)) {

        parrafoNombre.className = "mensaje__error"
        parrafoNombre.innerHTML = "El campo nombre no debe de contener números"
        inputNombre.className = "input_error";
        formularioValido = false;
    } else {
        inputNombre.className = "input_correct";
    }

    
    if (!mailCorrecto.test(email)) {

        parrafoEmail.className = "mensaje__error"
        parrafoEmail.innerHTML = "Email inválido"
        inputEmail.className = "input_error";
        formularioValido = false;
    }else if (email.trim().length < 1) {

        parrafoEmail.className = "mensaje__error"
        parrafoEmail.innerHTML = "Rellene este campo"
        inputEmail.className = "input_error";
        formularioValido = false;

    } else {
        inputEmail.className = "input_correct";
    }


    if (clave.trim().length < 8) {
        parrafoclave.className = "mensaje__error"
        parrafoclave.innerHTML = "La clave debe de tener como mínimo 8 caracteres"
        inputClave.className = "input_error";
        formularioValido = false;
    } else if (clave.trim().length < 1) {
        parrafoclave.className = "mensaje__error"
        parrafoclave.innerHTML = "Rellene este campo"
        inputClave.className = "input_error";
        formularioValido = false;
    } else {
        inputClave.className = "input_correct";
    }



    if (claveConfirm.trim().length < 1) {
        parrafoClaveConfirm.className = "mensaje__error"
        parrafoClaveConfirm.innerHTML = "Rellene este campo"
        inputClaveConfirm.className = "input_error";
        formularioValido = false;
    } else if (claveConfirm !== clave) {
        parrafoClaveConfirm.className = "mensaje__error"
        parrafoClaveConfirm.innerHTML = "Las contraseñas no coinciden"
        inputClaveConfirm.className = "input_error";
        formularioValido = false;
    }else{
        inputClaveConfirm.className = "input_correct";
    }

    formularioValido && restablecerInput() && alert ("La inscripción ha sido correcta muuu bien") ;
}

function restablecerInput() {
    parrafoNombre.className = "invisible";
    parrafoEmail.className = "invisible";
    parrafoclave.className = "invisible";
    parrafoClaveConfirm.className = "invisible";
    return true;

}