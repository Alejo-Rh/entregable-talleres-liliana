function evaluarNumero(valor) {
  return new Promise((resolve, reject) => {
    if (valor > 10) {
      resolve(" El número es mayor a 10");
    } else {
      reject(" El número debe ser mayor a 10");
    }
  });
}

document.getElementById("btnEvaluar").addEventListener("click", () => {
  const valor = parseFloat(document.getElementById("inputValor").value);
  const resultado = document.getElementById("resultado");

  resultado.textContent = "Evaluando...";

  evaluarNumero(valor)
    .then(msg => {
      resultado.textContent = msg;
      resultado.classList.remove("text-red-600");
      resultado.classList.add("text-green-600");
    })
    .catch(error => {
      resultado.textContent = error;
      resultado.classList.remove("text-green-600");
      resultado.classList.add("text-red-600");
    });
});
