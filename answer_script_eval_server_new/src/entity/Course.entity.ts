import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Programme } from './Programme.entity';
import { Users } from './Users.entity';
import { Department } from './Department.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  subjectName!: string;

  @Column({ length: 50 })
  examType!: string;

  @Column({ length: 255 })
  markingScheme!: string;

  @Column({ length: 255 })
  sem!: string;

  @ManyToOne(() => Department, (dept) => dept.id)
  @JoinColumn()
  department!: Department;

  // @OneToOne(() => Faculty)
  // @JoinColumn()
  // faculty!: Faculty;

  @ManyToMany(() => Programme)
  @JoinTable({
    name: 'course_programme',
    joinColumn: {
      name: 'course',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'programme',
      referencedColumnName: 'id',
    },
  })
  programmes!: Programme[];

  @ManyToMany(() => Users)
  @JoinTable({
    name: 'course_users',
    joinColumn: {
      name: 'course',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'users',
      referencedColumnName: 'id',
    },
  })
  faculties!: Users[];
}
