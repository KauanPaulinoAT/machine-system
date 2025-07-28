import express from "express";
import cors from "cors";
import machineRoutes from "./routes/machineRoutes";

const app = express();

app.use(cors({
  origin: '192.168.18.219:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.use("/", machineRoutes);

app.use("/health", (req, res) => {

  res.status(200).json({
    status: "ok",
    message: "API is running",
  });
});

app.listen(3333, '0.0.0.0', () => {
  console.log("🚀 API rodando em http://0.0.0.0:3333");
});