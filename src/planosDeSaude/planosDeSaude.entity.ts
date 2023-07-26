import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class PlanoDeSaude extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  // Construtor da entidade
  constructor(nome: string, descricao: string) {
    super();
    this.nome = nome;
    this.descricao = descricao;
  }
}
