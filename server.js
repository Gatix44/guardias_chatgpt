const express = require('express');
const app = express();
const path = require('path');

// Ruta para el directorio de archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '')));

// Ruta para el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
