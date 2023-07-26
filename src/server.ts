/* eslint-disable @typescript-eslint/no-misused-promises */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import rotaAuth from "./auth/authRoutes.js";
import rotaAvaliacoes from "./avaliacoes/avaliacoesRoutes.js";
import rotaClinica from "./clinicas/clinicaRoutes.js";
import rotaConsulta from "./consultas/consultaRoutes.js";
import { AppDataSource } from "./data-source.js";
import rotaEspecialista from "./especialistas/especialistaRoutes.js";
import rotaPaciente from "./pacientes/pacienteRoutes.js";
import rotaPlanoDeSaude from "./planosDeSaude/planosDeSaude.routes.js";
import rotaEspecialidade from "./especialistas/especialidades/especialidades.routes.js";
import errorMiddleware from "./error/errorMiddleware.js";

dotenv.config({ path: ".env" });

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("App Data Source inicializado");
  })
  .catch((error) => {
    console.error(error);
  });

rotaPaciente(app);
rotaEspecialista(app);
rotaAvaliacoes(app);
rotaClinica(app);
rotaConsulta(app);
rotaPlanoDeSaude(app);
rotaAuth(app);
rotaEspecialidade(app);
app.use(errorMiddleware);

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

export default app;
