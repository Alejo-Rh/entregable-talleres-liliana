//Obtener localización del usuario
function obtenerUbicacion() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocalización no soportada");
    } else {
      navigator.geolocation.getCurrentPosition(
        pos => resolve(pos.coords),
        err => reject("Error obteniendo ubicación: " + err.message)
      );
    }
  });
}

document.getElementById("btnEjecutar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Obteniendo ubicación...";
  obtenerUbicacion()
    .then(coords => {
      resultado.textContent = `Latitud: ${coords.latitude}\nLongitud: ${coords.longitude}`;
    })
    .catch(err => {
      resultado.textContent = err;
    });
});

