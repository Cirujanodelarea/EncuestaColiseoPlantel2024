document.getElementById("surveyForm").addEventListener("submit", function(event) {
    // Validar que el formulario esté completo
    const formData = new FormData(event.target);
    for (const value of formData.values()) {
        if (value === "") {
            alert("Por favor, completa todos los campos obligatorios.");
            event.preventDefault(); // Evita que se envíe el formulario
            return;
        }
    }
    
    event.preventDefault(); // Evita la recarga de la página
    alert("Encuesta enviada. ¡Gracias por participar!");

    // Imprimir los datos en la consola (opcional)
    for (const entry of formData) {
        console.log(entry[0] + ": " + entry[1]);
    }
});
