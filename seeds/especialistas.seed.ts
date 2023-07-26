import { AppDataSource } from "../src/data-source.js";
import { Endereco } from "../src/enderecos/endereco.entity.js";
import { Especialista } from "../src/especialistas/Especialista.entity.js";

export const seedEspecialistas = async () => {
  try {
    // Exemplo de criação de planos de saúde iniciais
    const especialistas = [
      {
        nome: "Dr. João da Silva",
        crm: "12345",
        imagem: "https://exemplo.com/imagem-dr-joao.jpg",
        estaAtivo: true,
        especialidade: "Cardiologia",
        email: "joao.silva@example.com",
        telefone: "(11) 99999-9999",
        possuiPlanoSaude: true,
        planosSaude: ["Amil", "Unimed"],
        endereco: {
          rua: "Rua dos Médicos",
          numero: 123,
          bairro: "Centro",
          cidade: "São Paulo",
          estado: "SP",
          cep: 51234567,
        },
        role: "especialista",
        senha: "senha123",
      },
      {
        nome: "Dra. Maria Souza",
        crm: "67890",
        imagem: "https://exemplo.com/imagem-dra-maria.jpg",
        estaAtivo: true,
        especialidade: "Ginecologia",
        email: "maria.souza@example.com",
        telefone: "(21) 88888-8888",
        possuiPlanoSaude: false,
        planosSaude: [],
        endereco: {
          rua: "Avenida das Flores",
          numero: 456,
          bairro: "Jardins",
          cidade: "Rio de Janeiro",
          estado: "RJ",
          cep: 98765432,
        },
        role: "especialista",
        senha: "senha456",
      },
    ];

    for (const dados of especialistas) {
      const endereco = AppDataSource.manager.create(Endereco, dados.endereco);
      await AppDataSource.manager.save(endereco);
      const medico = { ...dados, endereco };
      const entidade = AppDataSource.manager.create(Especialista, medico);
      await AppDataSource.manager.save(entidade);
      console.log(`Especialista "${dados.nome}" criado com sucesso.`);
    }

    console.log("------ /n Seed Especialistas concluído com sucesso.");
  } catch (error) {
    console.error("Erro ao executar o seed:", error);
  }
};
