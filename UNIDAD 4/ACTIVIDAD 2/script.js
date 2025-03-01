document.addEventListener("DOMContentLoaded", function () {
    // Función para actualizar el reloj en tiempo real
    function actualizarReloj() {
        const ahora = new Date();
        const hora = ahora.getHours().toString().padStart(2, "0");
        const minutos = ahora.getMinutes().toString().padStart(2, "0");
        const segundos = ahora.getSeconds().toString().padStart(2, "0");
        document.getElementById(
            "reloj"
        ).textContent = `Hora actual: ${hora}:${minutos}:${segundos}`;
    }

    // Actualizar el reloj cada segundo
    setInterval(actualizarReloj, 1000);
    actualizarReloj(); 

    document.addEventListener("DOMContentLoaded", function () {

        // Capturar el evento submit del formulario
        
        const formulario = document.getElementById("formulario");

        formulario.addEventListener("submit", function (event) {
            event.preventDefault(); 

            // Obtener los valores del formulario
            const nombre = document.getElementById("nombre").value.trim();
            const apellido1 = document.getElementById("apellido1").value.trim();
            const apellido2 = document.getElementById("apellido2").value.trim();

            // Mostrar el mensaje con los datos ingresados
            alert(`Mensaje recibido, señor ${nombre} ${apellido1} ${apellido2}`);
        });
    });

});
