document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página

    const formData = new FormData(event.target);
    let responses = {}; // Objeto para almacenar las respuestas

    // Recopilar las respuestas
    for (const [key, value] of formData.entries()) {
        responses[key] = value; // Guardar en el objeto
    }

    // Mostrar respuestas en la consola
    console.log("Respuestas del jugador:");
    for (const key in responses) {
        console.log(`${key}: ${responses[key]}`);
    }

    // Mostrar un mensaje de agradecimiento en la interfaz
    alert("Encuesta enviada. ¡Gracias por participar!");

    // Opcional: Mostrar las respuestas en un alert (puede ser molesto para algunos)
    // alert(JSON.stringify(responses, null, 2));
});
