
function validar() {

    //Obtener los datos ingresados
    let nombre = document.getElementById("nombre");
    let nomb = nombre.value.trim();
    let apellido = document.getElementById("apellido");
    let surn = apellido.value.trim();
    let edad = document.getElementById("edad");
    let ed = edad.value.trim();
    let email = document.getElementById("email");
    let correo = email.value.trim();
    let comentario = document.getElementById("comentario");
    let comen = comentario.value.trim();
    let terms = document.getElementById("terms");
    let term = terms.checked;
    let patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //Validar los campos
    let valid = true;

    if (nomb === "") {
        document.querySelector('#errorname').style.display = 'inline';
        nombre.focus();
        valid = false;
    } else {
        document.querySelector('#errorname').style.display = 'none';
    }

    if (surn === "") {
        document.querySelector('#errorsurn').style.display = 'inline';
        apellido.focus();
        valid = false;
    } else {
        document.querySelector('#errorsurn').style.display = 'none';
    }

    if (ed === "") {
        document.querySelector('#errorage').style.display = 'inline';
        edad.focus();
        valid = false;
    } else {
        document.querySelector('#errorage').style.display = 'none';
    }

    if (!patron.test(correo)) {
        document.querySelector('#erroremail').style.display = 'inline';
        email.focus();
        valid = false;
    } else {
        document.querySelector('#erroremail').style.display = 'none';
    }

    if (comen === "") {
        document.querySelector('#errorcom').style.display = 'inline';
        comentario.focus();
        valid = false;
    } else {
        document.querySelector('#errorcom').style.display = 'none';
    }

    if (!term) {
        document.querySelector('#errorcheck').style.display = 'inline';
        terms.focus();
        valid = false;
    } else {
        document.querySelector('#errorcheck').style.display = 'none';
    }

    if (valid) {
        document.getElementById("form-content").style.display = "none";
        document.getElementById("confirm").style.display = "block";

        // Muestra los datos ingresados
        const datosIngresados = document.getElementById("datos-ingresados");
        datosIngresados.style.display = "block";

        // Obtén los valores de los campos y muéstralos
        const nombreIngresado = document.getElementById("nombre-ingresado");
        nombreIngresado.textContent = nomb;
        const apellidoIngresado = document.getElementById("apellido-ingresado");
        apellidoIngresado.textContent = surn;
        const edadIngresada = document.getElementById("edad-ingresada");
        edadIngresada.textContent = ed;
        const emailIngresado = document.getElementById("email-ingresado");
        emailIngresado.textContent = correo;
        
    }
    return false;
}


