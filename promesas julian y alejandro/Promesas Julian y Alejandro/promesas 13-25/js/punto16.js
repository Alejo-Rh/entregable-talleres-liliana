function esperar(ms){
    return new Promise((_, reject)=>{
        setTimeout(()=> reject(new Error("Timeout: la solictud tardó demasiado")), ms);
    });

}

document.getElementById("btnCargar").addEventListener("click", ()=>{
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Cargando...";

    const url = "https://jsonplaceholder.typicode.com/posts";

    Promise.race([
        fetch(url).then(res => res.json()),
        esperar(10000)
         
    ])
    .then(data=> {
        resultado.textContent = `Datos recibidos: ${data.length} elementos`;

    })
    .catch(error =>{
        resultado.textContent = `${error.message}`;
    });

});