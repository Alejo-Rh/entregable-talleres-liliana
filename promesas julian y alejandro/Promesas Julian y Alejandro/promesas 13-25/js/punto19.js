function esperar(ms){
 return new Promise(resolve => {
    setTimeout(() => {
        console.log(`Espera de ${ms} ms completada`);
        resolve();

 }, ms);
 });
}

document.getElementById("btnEsperar").addEventListener("click", () =>{
    const estado = document.getElementById("estado");
    estado.textContent = "Esperando múltiples tiempos...";

    Promise.all([
        esperar(1000),
        esperar(2000),
        esperar(3000),
    ])
    .then(()=>{
        estado.textContent = "¡Listo! Todas las esperas terminaron";
    });

});