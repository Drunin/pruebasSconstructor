const express = require('express');
const cors = require('cors');

const app = express();

// Configurar CORS para permitir solicitudes desde http://localhost:4200
app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json());

// Endpoint de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    res.json({ token: 'jwt-token' });
  } else {
    res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }
});

// Iniciar servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
