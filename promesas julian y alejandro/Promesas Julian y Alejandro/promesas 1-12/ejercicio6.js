//Enviar formulario simulado
function enviarFormulario(datos) {
  return new Promise((resolve, reject) => {
    if (datos.nombre && datos.email) {
      resolve("Formulario enviado correctamente");
    } else {
      reject("Error: Campos obligatorios faltantes");
    }
  });
}

document.getElementById("btnEjecutar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  const datos = { nombre: "Juan", email: "juan@mail.com" };
  enviarFormulario(datos)
    .then(msg => {
      resultado.textContent = msg;
    })
    .catch(err => {
      resultado.textContent = err;
    });
});

