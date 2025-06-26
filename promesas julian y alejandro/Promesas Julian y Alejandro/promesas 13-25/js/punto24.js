function leerSensor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Lectura del sensor: 35°C");
    }, 1000); // Simula retardo de 1 segundo
  });
}

document.getElementById("btnLeer").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Leyendo datos del sensor...";

  leerSensor()
    .then(valor => {
      resultado.textContent = valor;
    })
    .catch(error => {
      resultado.textContent = `Error: ${error.message}`;
    });
});
