// Mostrar el segundo mensaje después de un retraso
setTimeout(function() {
    const mensajeSecundario = document.getElementById("mensajeSecundario");
    mensajeSecundario.style.display = "block"; // Muestra el segundo mensaje
    mensajeSecundario.style.opacity = 1; // Asegura que el mensaje sea visible

    // Aplicamos la animación de desvanecimiento y desplazamiento
    mensajeSecundario.style.animation = "aparecerMensaje 2s ease-out forwards"; // Aplica la animación
}, 1500); // 1500 milisegundos de retraso antes de mostrar el segundo mensaje
