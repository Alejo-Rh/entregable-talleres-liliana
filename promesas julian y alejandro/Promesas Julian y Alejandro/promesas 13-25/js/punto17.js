const baseDeDatos = {
    1: {id: 1, nombre: "Alejandro rodriguz", email: "alejandro123.montoya@exmaple.com"},
    2: {id: 2, nombre: "Julian omar", email: "julianomar@gmail.com"},
    3: {id: 3, nombre: "gabriel Perez", email: "gabriel@gmail.com"}
};

function buscarUsuario(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const usuario = baseDeDatos[id];
            if(usuario){
                resolve(usuario);
            }else{
                reject("Usuario no encontrado");
            }
        },300);
    });
}

function mostrarResultado(msg){
    document.getElementById("resultado").textContent = msg;
}

document.getElementById("btnBuscar").addEventListener("click", ()=>{
    // const inputId = document.getElementById("inputId").Value.trim();
    const inputId = document.getElementById("inputId").value.trim();

    if(!inputId){
        mostrarResultado("ingrese un ID valido");
        return;
    }
    mostrarResultado("Buscando usuario...");

    buscarUsuario(inputId)
    .then(usuario => {
        mostrarResultado(`usuario encontrado: ${usuario.nombre} (${usuario.email})`);

    })
    .catch(error => {
        mostrarResultado(`${error}`);
    })
})