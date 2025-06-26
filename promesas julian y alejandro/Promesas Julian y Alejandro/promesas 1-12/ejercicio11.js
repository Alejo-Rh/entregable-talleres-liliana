//Simular compra online
function validarStock(producto) {
  return new Promise((resolve, reject) => {
    if (producto.stock > 0) {
      resolve("Stock disponible");
    } else {
      reject("Sin stock");
    }
  });
}

function procesarPago(tarjeta) {
  return new Promise((resolve, reject) => {
    if (tarjeta.numero && tarjeta.cvv) {
      resolve("Pago procesado");
    } else {
      reject("Pago rechazado");
    }
  });
}

document.getElementById("btnEjecutar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  validarStock({ nombre: "Camiseta", stock: 5 })
    .then(() => procesarPago({ numero: "123456789", cvv: "123" }))
    .then(() => {
      resultado.textContent = "Compra exitosa";
    })
    .catch(err => {
      resultado.textContent = err;
    });
});

