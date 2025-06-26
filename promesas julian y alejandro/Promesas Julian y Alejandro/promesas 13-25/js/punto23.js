document.getElementById("btnIniciar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Procesando...";

  Promise.resolve(2)
    .then(valor => {
      const nuevo = valor * 2;
      console.log("Doblado:", nuevo);
      return nuevo;
    })
    .then(valor => {
      const suma = valor + 5;
      console.log("Suma 5:", suma);
      return suma;
    })
    .then(valorFinal => {
      resultado.textContent = `Resultado final: ${valorFinal}`;
    })
    .catch(error => {
      resultado.textContent = `Error: ${error.message}`;
    });
});
