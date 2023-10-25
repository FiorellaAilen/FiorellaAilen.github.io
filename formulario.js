const enviar = document.getElementById("enviar");
const datosIngresados = document.getElementById("datosIngresados");


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
        // Mostrar los datos ingresados
        const datosIngresados = document.getElementById("datosIngresados");
        datosIngresados.style.display = "block";

        // Crear elementos para mostrar los datos
        const nombreIngresado = document.createElement("p");
        nombreIngresado.innerHTML = ` ${nomb}`;
        document.getElementById("nombre-ingresado").appendChild(nombreIngresado);

        const apellidoIngresado = document.createElement("p");
        apellidoIngresado.innerHTML = `${surn}`;
        document.getElementById("apellido-ingresado").appendChild(apellidoIngresado);

        const edadIngresada = document.createElement("p");
        edadIngresada.innerHTML = ` ${ed}`;
        document.getElementById("edad-ingresado").appendChild(edadIngresada);

        const emailIngresado = document.createElement("p");
        emailIngresado.innerHTML = ` ${correo}`;
        document.getElementById("email-ingresado").appendChild(emailIngresado);

        const comentarioIngresado = document.createElement("p");
        comentarioIngresado.innerHTML = ` ${comen}`;
        document.getElementById("comen-ingresado").appendChild(comentarioIngresado);
    
    }
    return false;
}




