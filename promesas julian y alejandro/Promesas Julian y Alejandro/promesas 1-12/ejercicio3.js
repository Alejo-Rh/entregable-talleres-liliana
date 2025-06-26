// Llamar a una API con fetch
function obtenerDatos(url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("Error en la respuesta");
      return res.json();
    });
}

document.getElementById("btnEjecutar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Cargando datos...";
  obtenerDatos("https://jsonplaceholder.typicode.com/todos/1")
    .then(data => {
      resultado.textContent = "Datos recibidos:\n" + JSON.stringify(data, null, 2);
    })
    .catch(error => {
      resultado.textContent = "Error: " + error.message;
    });
});
