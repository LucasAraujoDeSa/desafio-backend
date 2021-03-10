import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './User';

@Entity('address')
export default class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  endereço: string;

  @Column()
  numero: number;

  @Column()
  complemento: string;

  @Column()
  cep: number;

  @Column()
  cidade: string;

  @Column()
  estado: string;
}
