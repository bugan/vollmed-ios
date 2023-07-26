import { AppDataSource } from "../src/data-source.js";
import { Clinica } from "../src/clinicas/clinicaEntity.js";
import { Role } from "../src/auth/roles.js";
import { Endereco } from "../src/enderecos/enderecoEntity.js";

export const seedClinicas = async () => {
  try {
    const clinicas = [
      {
        nome: "Clínica São Lucas",
        endereco: {
          rua: "Avenida dos Médicos",
          numero: 123,
          bairro: "Centro",
          cidade: "São Paulo",
          estado: "SP",
          cep: 11234567,
        },
        planoDeSaudeAceitos: ["Amil", "Unimed", "Bradesco Saúde"],
        email: "contato@clinicasaolucas.com.br",
        senha: "senha123",
        role: Role.clinica,
      },
      {
        nome: "Clínica Vida Saudável",
        endereco: {
          rua: "Rua das Flores",
          numero: 456,
          bairro: "Jardins",
          cidade: "Rio de Janeiro",
          estado: "RJ",
          cep: 98765432,
        },
        planoDeSaudeAceitos: ["SulAmérica", "Hapvida", "Golden Cross"],
        email: "contato@clinicavidasaudavel.com.br",
        senha: "senha456",
        role: Role.clinica,
      },
      {
        nome: "Clínica Bem-Estar",
        endereco: {
          rua: "Avenida da Saúde",
          numero: 789,
          bairro: "Bem Estar",
          cidade: "Belo Horizonte",
          estado: "MG",
          cep: 54321098,
        },
        planoDeSaudeAceitos: ["NotreDame Intermédica", "São Francisco Saúde"],
        email: "contato@clinicabemestar.com.br",
        senha: "senha789",
        role: Role.clinica,
      },
    ];

    for (const dados of clinicas) {
      const endereco = AppDataSource.manager.create(Endereco, dados.endereco);
      await AppDataSource.manager.save(endereco);
      const clinica = { ...dados, endereco };
      const entidade = AppDataSource.manager.create(Clinica, clinica);
      await AppDataSource.manager.save(entidade);
      console.log(`Clinica "${dados.nome}" criado com sucesso.`);
    }

    console.log("-----", "Seed Clinicas concluído com sucesso.");
  } catch (error) {
    console.error("Erro ao executar o seed:", error);
  }
};
