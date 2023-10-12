const datos = document.getElementById("datos");
const listaErrores = document.getElementById("listaErrores");
const enviar = document.getElementById("enviar");
/*
const cumple = document.getElementById("birthday");
const correo = document.getElementById("email");
const comen = document.getElementById("subject");
*/

function form() {
    let name = document.getElementById("name");
    let nombre = name.ariaValueMax.trim();
    let birthday = document.getElementById("birthday");
    let cumple = birthday.ariaValueMax.trim();
    let email = document.getElementById("email");
    let correo = email.ariaValueMax.trim();
    let terms = document.getElementById("terms");
    let term = terms.checked;
    let errores = [];
    let campo_error = null;
    let frm = document.getElementById("frm");

    for (v of frm.querySelectorAll("input, textarea")) {
        v.classList.remove("error");
    }

    if (nombre == "") {
        errores.push("Falta el nombre");
        campo_error = name;
        name.classList.add("error");
    }

    if (cumple == "") {
        errores.push("Falta la fecha de nacimiento");
        campo_error = birthday;
        birthday.classList.add("error");
    }

    if (correo == "") {
        errores.push("Falta el correo electrónico");
        campo_error = email;
        email.classList.add("error");
    }

    if (!term) {
        errores.push("Debe aceptar los terminos y condiciones");
        campo_error = terms;
        terms.parentNode.classList.add("error");
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        errores.push("El correo electrónico no es válido.");
        campo_error = email;
        email.classList.add("error");
    }

    /* Para que nno se repita muchas veces el mensaje */
    listaErrores.innerHtml = "";

    if (errores.length > 0) {
        for (let i = 0; i < errores.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = errores[i];
            listaErrores.appendChild(li);
        }

        if (campo_error != null) {
            campo_error.focus();
        }

        return false;

    }

    let msn = ` Has cargado correctamente tus datos ${nombre} `;
    datos.innerHTML = msn;

    return false;

}