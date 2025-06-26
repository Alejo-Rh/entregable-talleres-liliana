//Esperar cierto tiempo (setTimeout)
function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Listo después de " + ms + " ms"), ms);
  });
}

document.getElementById("btnEjecutar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Esperando...";
  esperar(2000)
    .then(mensaje => {
      resultado.textContent = mensaje;
    });
});
