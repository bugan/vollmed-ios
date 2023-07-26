import { AppDataSource } from "../data-source.js";
import { seedEspecialidades } from "./especialidades.seed.js";
import { seedEspecialistas } from "./especialistas.seed.js";
import { seedPacientes } from "./pacientes.seed.js";
import { seedPlanoDeSaude } from "./planoDeSaude.seed.js";

AppDataSource.initialize()
  .then(async () => {
    console.log("App Data Source inicializado");
    await seedPlanoDeSaude();
    await seedEspecialidades();
    await seedEspecialistas();
    await seedPacientes();
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
