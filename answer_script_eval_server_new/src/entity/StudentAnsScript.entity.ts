import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Student } from './Student.entity';
import { Course } from './Course.entity';
import { Document } from './Document.entity';
import { Programme } from './Programme.entity';
import { Answers } from './Answer.entity';

@Entity()
export class StudentAnsScript {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @Column({ length: 200, nullable: true })
  comment!: string;

  @Column()
  isVerified!: boolean;

  @Column()
  isSentForReEval!: boolean;

  @Column()
  semester!: string;

  @OneToOne(() => Document)
  @JoinColumn()
  ansDocument!: Document;

  @ManyToOne(() => Student, (student) => student.id)
  @JoinColumn()
  student!: Student;

  @ManyToOne(() => Course, (course) => course.id)
  @JoinColumn()
  course!: Course;

  @ManyToOne(() => Programme, (prog) => prog.id)
  @JoinColumn()
  programme!: Programme;

  @ManyToMany(() => Answers)
  @JoinTable({
    name: 'stud_ans_script_answer',
    joinColumn: {
      name: 'stud_ans_script',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'answer',
      referencedColumnName: 'id',
    },
  })
  answers!: Answers[];
}
