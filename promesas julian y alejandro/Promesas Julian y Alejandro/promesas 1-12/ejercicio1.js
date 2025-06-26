//Leer archivo local (simulado)
function leerArchivo(path) {
  return new Promise((resolve, reject) => {
    if (path && typeof path === "string" && path.endsWith(".txt")) {
      resolve("Contenido leído del archivo: " + path);
    } else {
      reject("Error al leer el archivo. Ruta inválida.");
    }
  });
}

const btn = document.getElementById("btnEjecutar");
const resultadoDiv = document.getElementById("resultado");

btn.addEventListener("click", () => {
  resultadoDiv.textContent = "Ejecutando...";
  leerArchivo("datos.txt")
    .then(contenido => {
      resultadoDiv.textContent = contenido;
    })
    .catch(error => {
      resultadoDiv.textContent = "Error: " + error;
    });
});
