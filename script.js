document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nombre = document.querySelector("input[name='nombre']").value;
      const email = document.querySelector("input[name='email']").value;
      const mensaje = document.querySelector("textarea[name='mensaje']").value;
  
      if (!nombre || !email || !mensaje) {
        alert("Por favor, complete todos los campos del formulario.");
      } else {
        // Aquí puedes agregar lógica adicional, como enviar el formulario a través de AJAX o realizar otras acciones necesarias.
        alert("Formulario enviado correctamente.");
        form.reset();
      }
    });
  });
  