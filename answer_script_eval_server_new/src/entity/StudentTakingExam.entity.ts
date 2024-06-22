import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Course } from './Course.entity';
import { Programme } from './Programme.entity';
import { Users } from './Users.entity';
import { Student } from './Student.entity';

@Entity()
export class StudentTakingExam {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @Column({ type: 'date' })
  monAndYear!: Date;

  @Column()
  semester!: string;

  @ManyToOne(() => Course, (cours) => cours.id)
  course!: Course;

  @ManyToMany(() => Programme)
  @JoinTable({
    name: 'student_tak_exam_programme',
    joinColumn: {
      name: 'student_tak_exam',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'programe',
      referencedColumnName: 'id',
    },
  })
  programmes!: Programme[];

  @ManyToMany(() => Users)
  @JoinTable({
    name: 'student_tak_exam_users',
    joinColumn: {
      name: 'studenttakexam',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'users',
      referencedColumnName: 'id',
    },
  })
  faculties!: Users[];

  @ManyToMany(() => Student)
  @JoinTable({
    name: 'regular_student',
    joinColumn: {
      name: 'regular',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'student',
      referencedColumnName: 'id',
    },
  })
  regularStudents!: Student[];

  @ManyToMany(() => Student)
  @JoinTable({
    name: 'supplementary_student',
    joinColumn: {
      name: 'supplementary',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'student',
      referencedColumnName: 'id',
    },
  })
  supplementaryStudents!: Student[];
}
