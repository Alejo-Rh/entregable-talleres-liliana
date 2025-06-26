function paso1(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("paso 1 completado");
            resolve("paso 1");
        },1000);
    });
}

function paso2(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("paso 2 completado");
            resolve("paso 2");
        },1500);
    })
}

function paso3(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("paso 3 completado");
            resolve("paso 3");
        },2000);
    });
}

document.getElementById("btnIniciar").addEventListener("click", ()=>{
  const estado = document.getElementById("estado");
  estado.textContent = "Secuencia iniciada..";
  
  paso1()
  .then(resultado1 =>{
    estado.textContent = resultado1 + "completado";
    return paso2();
  })
  .then(resultado2 =>{
    estado.textContent = resultado2 + "completado";
    return paso3();
  })
    .then(resultado3 =>{
        estado.textContent = resultado3 + "completado. Secuencia finalizada";

    });
});