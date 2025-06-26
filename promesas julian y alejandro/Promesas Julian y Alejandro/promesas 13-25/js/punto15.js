 function reintentar(fn, intentos) {
      return fn().catch(error => {
        if (intentos > 1) {
          mostrarMensaje(` Error, reintentando... quedan ${intentos - 1} intentos`);
          return reintentar(fn, intentos - 1);
        }
        return Promise.reject(error);
      });
    }

    function tareaQueFallaAleatoriamente() {
      return new Promise((resolve, reject) => {
        const exito = Math.random() > 0.7; // 30% de éxito
        setTimeout(() => {
          if (exito) {
            resolve(' ¡Éxito!');
          } else {
            reject(' Falló');
          }
        }, 500);
      });
    }

    function mostrarMensaje(msg) {
      document.getElementById('mensaje').textContent = msg;
    }

    document.getElementById('btnIniciar').addEventListener('click', () => {
      mostrarMensaje(' Ejecutando tarea...');
      reintentar(tareaQueFallaAleatoriamente, 5)
        .then(resultado => mostrarMensaje(resultado))
        .catch(error => mostrarMensaje(' Error final: ' + error));
    });