document.addEventListener('DOMContentLoaded', () => {
  let controller;

  document.getElementById('iniciar').addEventListener('click', () => {
    controller = new AbortController(); 
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/photos', { signal })
      .then(res => res.json())
      .then(data => {
        console.log(' Datos recibidos:', data.slice(0, 5)); 
        document.getElementById('mensaje').textContent = ` Recibidos ${data.length} ítems`;
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.warn('❌ Solicitud cancelada');
          document.getElementById('mensaje').textContent = '❌ Solicitud cancelada';
        } else {
          console.error('⚠️ Otro error:', error);
          document.getElementById('mensaje').textContent = '⚠️ Error al cargar datos';
        }
      });
  });

  document.getElementById('cancelar').addEventListener('click', () => {
    if (controller) {
      controller.abort();
      console.log(' AbortController ejecutado');
    }
  });
});
