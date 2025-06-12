document.getElementById("BVer").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "block";
})

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
    
    // Mostrar el segundo mensaje después de un retraso
    setTimeout(function() {
        document.getElementById("mensajeSecundario").style.display = "block"; // Mostramos el segundo mensaje
    }, 1500); // 1500 milisegundos de retraso antes de mostrar el segundo mensaje
});






