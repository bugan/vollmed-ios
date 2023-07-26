import { AppDataSource } from "../src/data-source.js";
import { Especialidade } from "../src/especialistas/especialidades/especialidade.entity.js";

export const seedEspecialidades = async () => {
  try {
    const especialidades = [
      {
        nome: "Cardiologia",
        descricao:
          "Especialidade médica que trata de doenças do coração e do sistema cardiovascular.",
      },
      {
        nome: "Dermatologia",
        descricao:
          "Especialidade médica que trata de doenças da pele, cabelo e unhas.",
      },
      {
        nome: "Ginecologia",
        descricao:
          "Especialidade médica que trata da saúde da mulher, incluindo o sistema reprodutor.",
      },
      {
        nome: "Pediatria",
        descricao:
          "Especialidade médica que trata de bebês, crianças e adolescentes.",
      },
      {
        nome: "Ortopedia",
        descricao:
          "Especialidade médica que trata de doenças e lesões do sistema musculoesquelético.",
      },
      {
        nome: "Neurologia",
        descricao:
          "Especialidade médica que trata de doenças do sistema nervoso e cérebro.",
      },
      {
        nome: "Oftalmologia",
        descricao:
          "Especialidade médica que trata de doenças dos olhos e do sistema visual.",
      },
      {
        nome: "Psiquiatria",
        descricao:
          "Especialidade médica que trata de doenças mentais e distúrbios psiquiátricos.",
      },
      {
        nome: "Otorrinolaringologia",
        descricao:
          "Especialidade médica que trata de doenças do ouvido, nariz e garganta.",
      },
      {
        nome: "Urologia",
        descricao:
          "Especialidade médica que trata de doenças do sistema urinário e órgãos reprodutivos masculinos.",
      },
    ];

    for (const planoData of especialidades) {
      const planoDeSaude = AppDataSource.manager.create(
        Especialidade,
        planoData
      );
      await AppDataSource.manager.save(planoDeSaude);
      console.log(`Plano de saúde "${planoData.nome}" criado com sucesso.`);
    }

    console.log("Seed especialidades concluído com sucesso.");
  } catch (error) {
    console.error("Erro ao executar o seed:", error);
  }
};
