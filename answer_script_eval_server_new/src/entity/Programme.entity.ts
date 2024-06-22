import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Department } from './Department.entity';

@Entity()
export class Programme {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  programmeName!: string;

  // @ManyToOne(() => Department, (department) => department.id)
  // @JoinColumn()
  // department!: Department;

  @ManyToMany(() => Department)
  @JoinTable({
    name: 'programme_department',
    joinColumn: {
      name: 'programme',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'department',
      referencedColumnName: 'id',
    },
  })
  departments!: Department[];
}
