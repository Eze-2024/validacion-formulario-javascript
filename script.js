const submitFunction = (event) => {
    if(!validarFormulario()) {
        event.preventDefault(); // se previene que se actualice la web
    } else {
        event.preventDefault(); 
        alert(
            'nombre: '+document.getElementById('nombre').value + '\n' +
            'apellido: '+document.getElementById('apellido').value + '\n' +
            'documento: '+document.getElementById('documento').value + '\n' +
            'email: '+document.getElementById('email').value + '\n' +
            'edad: '+document.getElementById('edad').value + '\n' +
            'actividad: '+document.getElementById('actividad').value + '\n' +
            'nivel De Estudio: '+document.getElementById('nivelEstudio').value + '\n'
        )
    }
}

document.getElementById('formulario').addEventListener('submit',submitFunction) //escucha envio del form

function validarFormulario() {
    //esto valida todos los campos de texto
    let camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase()+campo.id.slice(1)); // id con la primera en mayuscula
        if(campo.value.length==''){
            mostrarError(errorCampo, 'Este campo es requerido');
            validacionCorrecta=false;
        } else if(campo.value.length>0 && campo.value.length < 3) {
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres');
            validacionCorrecta=false;
        } else {
            ocultarError(errorCampo);
        }
    });

    //valido que el email sea de formato valido
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email.value)){ // valida que el formato del email sea valido
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail,'Ingrese un correo electronico valido');
    }

    //validacion de edad
    const edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');

    if(edad.value < 18){
        mostrarError(errorEdad,'Debes ser mayor de edad para registrarte');
        validacionCorrecta=false;
    } else {
        ocultarError(errorEdad);
    }

    //validacion de actividad
    const actividad = document.getElementById('actividad');
    let errorActividad = document.getElementById('errorActividad');

    if(actividad.value == ''){
        mostrarError(errorActividad,'Por favor selecciona una actividad');
        validacionCorrecta=false;
    } else {
        ocultarError(errorActividad);
    }

    //validacion de nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio');
    let errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio,'Por favor selecciona un nivel de estudio');
        validacionCorrecta=false;
    } else {
        ocultarError(errorNivelEstudio);
    }

    //validar aceptar los TyC
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    let errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos,'Debes aceptar los TyC');
        validacionCorrecta=false;
    } else {
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta; // esto dira si el form completo es o no valido

}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}