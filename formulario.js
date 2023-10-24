
function validar() {

    //Obtener los datos ingresados
    let nombre = document.getElementById("nombre");
    let nomb = nombre.value.trim();
    let apellido = document.getElementById("apellido");
    let surn = apellido.value.trim();
    // let birthday = document.getElementById("birthday");
    // let cumple = birthday.value.trim();
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
        return false;
    } else {
        document.querySelector('#errorname').style.display = 'none';
    }

    if (surn === "") {
        document.querySelector('#errorsurn').style.display = 'inline';
        apellido.focus();
        return false;
    } else {
        document.querySelector('#errorsurn').style.display = 'none';
    }

    /*
        if (cumple === "") {
            document.querySelector('#errorbirth').style.display = 'inline';
            birthday.focus();
            return false;
        } else {
            document.querySelector('#errorage').style.display = 'none';
        }*/

    if (ed === "" || isNaN(edad)) {
        document.querySelector('#errorage').style.display = 'inline';
        edad.focus();
        return false;
    } else {
        document.querySelector('#errorage').style.display = 'none';
    }

    if (!patron.test(correo)) {
        document.querySelector('#erroremail').style.display = 'inline';
        email.focus();
        return false;
    } else {
        document.querySelector('#erroremail').style.display = 'none';
    }

    if (comen === "") {
        document.querySelector('#errorcom').style.display = 'inline';
        comentario.focus();
        return false;
    } else {
        document.querySelector('#errorcom').style.display = 'none';
    }

    if (!term) {
        document.querySelector('#errorcheck').style.display = 'inline';
        terms.focus();
        return false;
    } else {
        document.querySelector('#errorcheck').style.display = 'none';
    }

    if (valid) {
        document.getElementById("form-content").style.display = "none";
        document.getElementById("confirm").style.display = "block";

        // Muestra los datos ingresados
        document.getElementById("datos-ingresados").style.display = "block";
        document.getElementById("nombre-ingresado").textContent = nombre;
        // document.getElementById("cumple-ingresado").textContent = cumple;
        document.getElementById("edad-ingresada").textContent = edad;
        document.getElementById("email-ingresado").textContent = correo;
        return false;
    } else {
        return false;
    }

}