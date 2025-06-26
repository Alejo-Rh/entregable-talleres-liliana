//cargar imagen
function cargarImagen(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject("Error al cargar imagen");
    image.src = url;
  });
}

document.getElementById("btnEjecutar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Cargando imagen...";
  cargarImagen("https://via.placeholder.com/150")
    .then(img => {
      resultado.textContent = "Imagen cargada correctamente";
      // Opcional: mostrar la imagen
      resultado.appendChild(img);
    })
    .catch(err => {
      resultado.textContent = err;
    });
});

