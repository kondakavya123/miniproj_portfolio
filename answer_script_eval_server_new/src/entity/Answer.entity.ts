import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Question } from './Question.entity';

@Entity()
export class Answers {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @Column({ length: 10000 })
  answer!: string;

  @Column({ default: 0 })
  obtainedMarks!: number;

  @ManyToOne(() => Question, (q) => q.id)
  question!: Question;

  // @ManyToOne(() => StudentAnsScript, (ansScript) => ansScript.id)
  // ansScript!: StudentAnsScript;
}
