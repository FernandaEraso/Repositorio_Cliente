const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const usuariosRouter = require('./routes/usuariosRoutes');

const app = express();

dotenv.config();
mongoose.set('strictQuery', false); 

// conexión a mongo db
mongoose.connect('mongodb+srv://admin_s:admin123_@cluster0.rmyi3rf.mongodb.net/cliente')
    .then(() => console.log('Conectado a la base exitosamente.'))
    .catch(err => console.error("Error al conectar a la BD", err));

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// rutas
app.use('/usuarios', usuariosRouter);

// ruta base para comprobar que el servidor funciona
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Render asigna el puerto en process.env.PORT
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server ON - Port ${PORT} ฅ•ω•ฅ`);
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
