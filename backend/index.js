const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const usuariosRouter = require('./routes/usuariosRoutes');

const app = express();

// conexion a mongo db
mongoose.connect('mongodb+srv://admin_s:admin123_@cluster0.rmyi3rf.mongodb.net/cliente')
    .then(() => console.log('Conectado a la base exitosamente.'))
    .catch(err => console.error("Error al conectar a la BD", err));

app.use(bodyParser.json());
app.use('/usuarios', usuariosRouter);

app.listen(3005, () => {
    console.log("Server ON - Port 3005 ฅ•ω•ฅ")
});

/*dotenv.config();
// Middlewares base
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Rutas
app.use("/health", healthRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ API escuchando en http://localhost:${PORT}`);
});*/
