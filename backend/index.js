import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import healthRouter from "./routes/health.js";


dotenv.config();

const app = express();

// Middlewares base
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rutas
app.use("/health", healthRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ API escuchando en http://localhost:${PORT}`);
});
