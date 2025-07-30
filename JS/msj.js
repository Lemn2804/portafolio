function mostrarMensaje(event) {
    event.preventDefault();
    document.getElementById("mensajeEnviado").style.display = "block";
    setTimeout(() => {
        document.getElementById("formulario").submit();
    }, 2000);
}
