//Ejecutar promesas en secuencia
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
  resultado.textContent = "Leyendo archivos en secuencia...";
  leerArchivo("a.txt")
    .then(() => leerArchivo("b.txt"))
    .then(() => leerArchivo("c.txt"))
    .then(() => {
      resultado.textContent = "Lectura secuencial completada";
    })
    .catch(err => {
      resultado.textContent = err;
    });
});

