// Validar login simulado
function login(usuario, clave) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin" && clave === "123") {
      resolve("Bienvenido, " + usuario);
    } else {
      reject("Usuario o clave incorrectos");
    }
  });
}

document.getElementById("btnEjecutar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  login("admin", "123")
    .then(msg => {
      resultado.textContent = msg;
    })
    .catch(err => {
      resultado.textContent = err;
    });
});

