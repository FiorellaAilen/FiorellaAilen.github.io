function validar() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let edad = document.getElementById("edad");

    if (nombre.value.trim() === "" || nombre.value.length < 3) {
        document.querySelector('errorNombre').style.display = 'inline';
        nombre.focus();
        return false;
    } else {
        document.querySelector('errorNombre').style.display = 'none';
    }

    if (apellido.value.trim() === "" || apellido.value.length < 3) {
        document.querySelector('errorApellido').style.display = 'inline';
        apellido.focus();
        return false;
    } else {
        document.querySelector('errorApellido').style.display = 'none';
    }

    if (edad.value.trim() === "" || isNaN(edad.value) || (edad.value < 18 || edad.value > 100)) {
        document.querySelector('errorEdad').style.display = 'inline';
        edad.focus();
        return false;
    } else {
        document.querySelector('errorEdad').style.display = 'none';
    }


}