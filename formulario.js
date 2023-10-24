
function validar() {

    //Obtener los datos ingresados
    let name = document.getElementById("name");
    let nombre = name.value.trim();
    // let birthday = document.getElementById("birthday");
    // let cumple = birthday.value.trim();
    let age = document.getElementById("age");
    let edad = age.value.trim();
    let email = document.getElementById("email");
    let correo = email.value.trim();
    let terms = document.getElementById("terms");
    let term = terms.checked;
    let patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //Validar los campos
    let valid = true;

    if (nombre === "") {
        document.querySelector('#errorname').style.display = 'inline';
        name.focus();
        invalid = false;
    } else {
        document.querySelector('#errorname').style.display = 'none';
    }
    /*
        if (cumple === "") {
            document.querySelector('#errorbirth').style.display = 'inline';
            birthday.focus();
            invalid = false;
        } else {
            document.querySelector('#errorage').style.display = 'none';
        }*/

    if (edad === "") {
        document.querySelector('#errorage').style.display = 'inline';
        age.focus();
        invalid = false;
    } else {
        document.querySelector('#errorage').style.display = 'none';
    }

    if (!patron.test(correo)) {
        document.querySelector('#erroremail').style.display = 'inline';
        email.focus();
        invalid = false;
    } else {
        document.querySelector('#erroremail').style.display = 'none';
    }

    if (!term) {
        document.querySelector('#errorcheck').style.display = 'inline';
        terms.focus();
        invalid = false;
    } else {
        document.querySelector('#errorcheck').style.display = 'none';
    }

    if (invalid) {
        document.getElementById("form-content").style.display = "none";
        document.getElementById("confirm").style.display = "block";

        // Muestra los datos ingresados
        document.getElementById("datos-ingresados").style.display = "block";
        document.getElementById("nombre-ingresado").textContent = nombre;
        document.getElementById("cumple-ingresado").textContent = cumple;
        document.getElementById("edad-ingresada").textContent = edad;
        document.getElementById("email-ingresado").textContent = correo;
        return false;
    } else {
        return false;
    }

}