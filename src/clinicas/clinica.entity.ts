import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";
import { Endereco } from "../enderecos/endereco.entity.js";
import { Especialista } from "../especialistas/Especialista.entity.js";
import { type IAutenticavel } from "../auth/IAutencavel.js";
import { Role } from "../auth/roles.js";
import { encryptPassword } from "../auth/cryptografiaSenha.js";

@Entity()
export class Clinica implements IAutenticavel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => Endereco, {
    cascade: ["update"],
  })
  @Column("varchar", { length: 100 })
  nome: string;

  @JoinColumn({ referencedColumnName: "id" })
  endereco: Relation<Endereco>;

  @OneToMany(() => Especialista, (especialista) => especialista.clinica)
  especialistas: Relation<Especialista[]>;

  @Column({ type: "simple-array", nullable: true })
  planoDeSaudeAceitos: string[];

  @Column("varchar", { length: 100 })
  email: string;

  @Column("varchar", { length: 100, select: false })
  senha: string; // Criptografia?

  @Column("varchar", { nullable: false, default: Role.clinica })
  role: Role;

  constructor(senha: string) {
    this.senha = senha;
  }
  @BeforeInsert()
  @BeforeUpdate()
  criptografa() {
    this.senha = encryptPassword(this.senha);
  }
}
