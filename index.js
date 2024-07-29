const express = require('express');
const app = express();
const os = require('os');
const networkInterfaces = os.networkInterfaces();
const port = 3000;

app.use(express.static('views'));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Rutas para las operaciones de la calculadora
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) + parseFloat(b);
  res.send(`Resultado: ${result}`);
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) - parseFloat(b);
  res.send(`Resultado: ${result}`);
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) * parseFloat(b);
  res.send(`Resultado: ${result}`);
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if (parseFloat(b) === 0) {
    res.send('Error: División por cero');
  } else {
    const result = parseFloat(a) / parseFloat(b);
    res.send(`Resultado: ${result}`);
  }
});
const getLocalIP = () => {
  for (const name of Object.keys(networkInterfaces)) {
    for (const net of networkInterfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'No se encontró una IP local.';
};

app.listen(port, () => {
  console.log(`Servidor escuchando en http://${getLocalIP()}:${port}`);
});


console.log('IP local:', getLocalIP());

module.exports = app;
