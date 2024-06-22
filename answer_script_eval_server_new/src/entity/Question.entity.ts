import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @Column()
  question_no!: number;

  @Column({ length: 1000 })
  question_desc!: string;

  @Column({ length: 10000 })
  masterAns!: string;

  @Column()
  maxMarks!: number;

  // @OneToOne(() => QuestionPaper)
  // @JoinColumn()
  // questionPaper!: QuestionPaper;

  // @OneToMany(() => QuestionPaper, (ques) => ques.id)
  // questionPaper!: QuestionPaper[];

  // @ManyToOne(() => QuestionPaper, (qp) => qp.id)
  // questionPaper!: QuestionPaper;
}
