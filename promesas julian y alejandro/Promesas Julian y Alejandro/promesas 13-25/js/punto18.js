function cargarJSON(){
return new Promise((resolve) =>{
    setTimeout(()=>{
        resolve({ nombre:"Test", edad:30, cuidad: "Medellin"});
    },500);
});
}

//referencia a elementos del DOM
const btn = document.getElementById("btnCargar");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", ()=>{
    resultado.textContent = "cargando JSON...";

    cargarJSON()
    .then(data => {
        resultado.textContent = `JSON cargando: ${data.nombre},${data.edad}años, vive en ${data.cuidad}`;
});
});