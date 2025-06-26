//Verificar sesión
function verificarSesion(token) {
  return new Promise((resolve, reject) => {
    if (token === "token_valido") {
      resolve("Sesión activa");
    } else {
      reject("Sesión caducada");
    }
  });
}

document.getElementById("btnEjecutar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  verificarSesion("token_valido")
    .then(msg => {
      resultado.textContent = msg;
    })
    .catch(err => {
      resultado.textContent = err;
    });
});
