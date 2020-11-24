import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export default class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
