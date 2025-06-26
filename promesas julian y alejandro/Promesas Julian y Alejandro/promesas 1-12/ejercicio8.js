//Cadena de promesas (login → obtener perfil)
function login(usuario, clave) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin" && clave === "123") {
      resolve("Bienvenido, " + usuario);
    } else {
      reject("Usuario o clave incorrectos");
    }
  });
}

function obtenerPerfil(usuario) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ usuario, edad: 30, email: usuario + "@mail.com" });
    }, 1000);
  });
}

document.getElementById("btnEjecutar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  login("admin", "123")
    .then(() => obtenerPerfil("admin"))
    .then(perfil => {
      resultado.textContent = `Perfil:\nUsuario: ${perfil.usuario}\nEdad: ${perfil.edad}\nEmail: ${perfil.email}`;
    })
    .catch(err => {
      resultado.textContent = err;
    });
});

