import { DataSource } from "typeorm";
import "reflect-metadata";
import { Paciente } from "./pacientes/paciente.entity.js";
import { Endereco } from "./enderecos/endereco.entity.js";
import { Especialista } from "./especialistas/Especialista.entity.js";
import { Avaliacoes } from "./avaliacoes/avaliacoes.entity.js";
import * as dotenv from "dotenv";
import { Clinica } from "./clinicas/clinica.entity.js";
import { Consulta } from "./consultas/consulta.entity.js";
import { Autenticaveis } from "./auth/auth.entity.js";
import { PlanoDeSaude } from "./planosDeSaude/planosDeSaude.entity.js";
import { Especialidade } from "./especialistas/especialidades/especialidade.entity.js";
dotenv.config({ path: ".env" });

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/database.sqlite", // caminho para o arquivo do banco de dados SQLite
  synchronize: true,
  logging: false,
  entities: ["./src/**/*.entity.{js,ts}"],
  migrations: [],
  subscribers: [],
});
