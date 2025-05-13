
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const passwordRoutes = require('./routes/password');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10101;

app.use(cors());
app.use(express.json()); // Para manejar JSON en las solicitudes

// Usamos las rutas de recuperación de contraseña
app.use('/api/password', passwordRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
