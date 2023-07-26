import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Especialidade {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;
}
