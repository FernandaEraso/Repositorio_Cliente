import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
<<<<<<< HEAD
    status: "mi api esta funcionando correctamente",
=======
    status: "ok",
>>>>>>> main
    service: "mi-api",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

export default router;
