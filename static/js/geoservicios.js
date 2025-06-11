// Seleccionar todos los botones de copiar
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const linkInput = event.target.previousElementSibling.getAttribute("href");
    navigator.clipboard.writeText(linkInput).then(() => {
      // Guardar el texto original del botón
      const originalText = button.textContent;

      // Cambiar el texto del botón a "¡Copiado!"
      button.textContent = "Copiado !";
      button.disabled = true; // opcional: desactiva el botón temporalmente

      // Restaurar el texto después de 2 segundos
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1000);
    });
  });
});
