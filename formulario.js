const datos = document.getElementById("datos");
const listaErrores = document.getElementById("listaErrores");
const enviar = document.getElementById("enviar");
const frm = document.getElementById("frm");

/*
const cumple = document.getElementById("birthday");
const correo = document.getElementById("email");
const comen = document.getElementById("subject");
*/

function form() {
    let name = document.getElementById("name");
    let nombre = name.value.trim();
    let birthday = document.getElementById("birthday");
    let cumple = birthday.value.trim();
    let email = document.getElementById("email");
    let correo = email.value.trim();
    let terms = document.getElementById("terms");
    let term = terms.checked;
    let errores = [];
    let campo_error = null;
    

    for (let v of frm.querySelectorAll("input, textarea")) {
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

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo)) {
        errores.push("El correo electrónico no es válido.");
        campo_error = email;
        email.classList.add("error");
    }

    /* Para que no se repita muchas veces el mensaje */
    listaErrores.innerHTML = "";

    if (errores.length > 0) {
        for (let i = 0; i < errores.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = errores[i];
            listaErrores.appendChild(li);
        }

        if (campo_error != null) {
            campo_error.focus();
        }else {
            let msn = `Has cargado correctamente tus datos ${nombre}`;
            datos.innerHTML = msn;
        }
    }
    
    frm.addEventListener("submit", form);

}