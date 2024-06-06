const express = require('express');
const cancionRoutes = require('./routes/cancionRoutes');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));  // Servir archivos estáticos

app.use(cancionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
