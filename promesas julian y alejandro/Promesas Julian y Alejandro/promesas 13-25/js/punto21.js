function validarNombre(nombre){
    return new Promise((resolve, reject)=>{
        if(nombre.trim().length >=3){
            resolve();
        }else {
            reject("El nombre tiene que tener al menos 3 caracteres");
        }
    });
}

function validarCorreo(correo){
return new Promise((resolve, reject)=>{
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regexEmail.test(correo)){
        resolve();
    } else {
        reject("El correo electrónico no es válido");
    }
});
}

function enviar(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Formulario enviado correctamente");

        }, 1000);
    });
}

document.getElementById("formulario").addEventListener("submit", event => {
  event.preventDefault();
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "";
  
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  Promise.all([
    validarNombre(nombre),
    validarCorreo(correo)
  ])
  .then(() => {
    mensaje.textContent = "Validación correcta, enviando formulario...";
    return enviar();
  })
  .then(successMsg => {
    mensaje.textContent = successMsg;
    mensaje.classList.remove("text-red-600");
    mensaje.classList.add("text-green-600");
  })
  .catch(errorMsg => {
    mensaje.textContent = errorMsg;
    mensaje.classList.remove("text-green-600");
    mensaje.classList.add("text-red-600");
  });
});