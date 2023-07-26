import { AppDataSource } from "../src/data-source.js";
import { PlanoDeSaude } from "../src/planosDeSaude/planosDeSaude.entity.js";

export const seedPlanoDeSaude = async () => {
  try {
    // Exemplo de criação de planos de saúde iniciais
    const planosDeSaudeData = [
      {
        nome: "Amil",
        descricao:
          "Plano de saúde com ampla rede de hospitais e clínicas em todo o Brasil.",
      },
      {
        nome: "Unimed",
        descricao:
          "Plano de saúde cooperativo com diversas opções de planos e coberturas.",
      },
      {
        nome: "Bradesco Saúde",
        descricao:
          "Plano de saúde com atendimento de qualidade e rede credenciada extensa.",
      },
      {
        nome: "SulAmérica",
        descricao:
          "Plano de saúde com diversas opções de cobertura e atendimento nacional.",
      },
      {
        nome: "Hapvida",
        descricao:
          "Plano de saúde com foco na região Nordeste do Brasil e preços acessíveis.",
      },
      {
        nome: "NotreDame Intermédica",
        descricao:
          "Plano de saúde com atendimento diferenciado e foco em medicina preventiva.",
      },
      {
        nome: "São Francisco Saúde",
        descricao:
          "Plano de saúde regional com ampla cobertura na região Sudeste.",
      },
      {
        nome: "Golden Cross",
        descricao:
          "Plano de saúde com tradição e diversos benefícios adicionais.",
      },
      {
        nome: "Medial Saúde",
        descricao:
          "Plano de saúde com opções de planos individuais e empresariais.",
      },
      {
        nome: "América Saúde",
        descricao:
          "Plano de saúde com atendimento em várias cidades do Brasil.",
      },
      {
        nome: "Outro",
        descricao: "Plano de saúde não selecionado ou não existente",
      },
    ];

    for (const planoData of planosDeSaudeData) {
      const planoDeSaude = AppDataSource.manager.create(
        PlanoDeSaude,
        planoData
      );
      await AppDataSource.manager.save(planoDeSaude);
      console.log(`Plano de saúde "${planoData.nome}" criado com sucesso.`);
    }

    console.log("Seed concluído com sucesso.");
  } catch (error) {
    console.error("Erro ao executar o seed:", error);
  }
};
