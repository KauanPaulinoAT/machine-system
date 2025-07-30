import express from "express";
import cors from "cors";
import machineRoutes from "./routes/machine";

const app = express();

app.use(cors({
origin: "*",
methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

app.use("/machines", machineRoutes);

app.use("/health", (req, res) => {

  res.status(200).json({
    status: "ok",
    message: "API is running",
  });
});

app.listen(3333, '0.0.0.0', () => {
  console.log("🚀 API rodando em http://0.0.0.0:3333");
});