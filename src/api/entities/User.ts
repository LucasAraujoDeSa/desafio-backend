import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Etinia {
  Branco = 'branco',
  Preto = 'preto',
  Pardo = 'pardo',
  Amarela = 'amarela',
  Indigina = 'indigina',
}

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  telefone: number;

  @Column()
  idade: number;

  @Column()
  peso: number;

  @Column({
    type: 'enum',
    enum: Etinia,
  })
  etinia: string;
}
