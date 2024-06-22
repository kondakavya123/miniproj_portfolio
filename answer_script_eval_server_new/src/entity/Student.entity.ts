import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Programme } from './Programme.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 })
  firstName!: string;

  @Column({ length: 50 })
  lastName!: string;

  @Column({ length: 20 })
  regNumber!: string;

  @Column()
  startYear!: number;

  // @OneToMany(() => Programme, (programme) => programme.id)
  // programmes!: Programme[];
  @ManyToOne(() => Programme, (p) => p.id)
  programme!: Programme;
}
