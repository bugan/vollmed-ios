import { AppDataSource } from "../src/data-source.js";
import { Paciente } from "../src/pacientes/pacienteEntity.js";

export const seedPacientes = async () => {
  try {
    // Exemplo de criação de planos de saúde iniciais
    const pacientes = [
      {
        cpf: "12345678901",
        nome: "João da Silva",
        email: "joao.silva@example.com",
        senha: "senha123",
        telefone: 11999999999,
        estaAtivo: true,
        possuiPlanoSaude: true,
        planosSaude: ["Amil", "Unimed", "Bradesco Saúde"],
        historico: [
          "Cirurgia de apendicite em 2018",
          "Tratamento para gripe em 2020",
        ],
        imagem: "https://exemplo.com/imagem-joao.jpg",
      },
      {
        cpf: "98765432101",
        nome: "Maria Souza",
        email: "maria.souza@example.com",
        senha: "senha456",
        telefone: 21999999999,
        estaAtivo: true,
        possuiPlanoSaude: false,
        historico: [
          "Exames de rotina em 2021",
          "Consulta com ortopedista em 2022",
        ],
        imagem: "https://exemplo.com/imagem-maria.jpg",
      },
      {
        cpf: "11122233344",
        nome: "Pedro Oliveira",
        email: "pedro.oliveira@example.com",
        senha: "senha789",
        telefone: 31999999999,
        estaAtivo: true,
        possuiPlanoSaude: true,
        planosSaude: ["SulAmérica", "Hapvida"],
        historico: [
          "Consulta com dermatologista em 2020",
          "Tratamento para sinusite em 2021",
        ],
        imagem: "https://exemplo.com/imagem-pedro.jpg",
      },
      // Adicione mais exemplos de pacientes conforme necessário
    ];

    for (const dados of pacientes) {
      const entidade = AppDataSource.manager.create(Paciente, dados);
      await AppDataSource.manager.save(entidade);
      console.log(`Plano de saúde "${dados.nome}" criado com sucesso.`);
    }

    console.log("---- /n Seed pacientes concluído com sucesso.");
  } catch (error) {
    console.error("Erro ao executar o seed:", error);
  }
};
