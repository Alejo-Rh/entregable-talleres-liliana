function leerArchivo(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nombre === "inexistente.txt") {
        reject(new Error("El archivo no existe"));
      } else {
        resolve("Contenido del archivo...");
      }
    }, 500);
  });
}

document.getElementById("btnLeer").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Leyendo archivo...";

  leerArchivo("inexistente.txt")
    .then(contenido => {
      resultado.textContent = contenido;
    })
    .catch(err => {
      resultado.textContent = ` Error: ${err.message}`;
      console.error("Error:", err);
    });
});
