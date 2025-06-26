//Leer múltiples archivos (simulados) en paralelo
function leerArchivo(path) {
  return new Promise((resolve, reject) => {
    if (path && typeof path === "string" && path.endsWith(".txt")) {
      resolve("Contenido leído del archivo: " + path);
    } else {
      reject("Error al leer el archivo. Ruta inválida.");
    }
  });
}

document.getElementById("btnEjecutar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Leyendo archivos...";
  Promise.all([
    leerArchivo("a.txt"),
    leerArchivo("b.txt"),
    leerArchivo("c.txt")
  ])
    .then(resultados => {
      resultado.textContent = "Archivos leídos:\n" + resultados.join("\n");
    })
    .catch(err => {
      resultado.textContent = err;
    });
});
