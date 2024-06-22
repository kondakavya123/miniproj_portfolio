import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Index,
} from 'typeorm';
import { Course } from './Course.entity';
import { Programme } from './Programme.entity';
import { Question } from './Question.entity';

@Index(['semester', 'course', 'programme'], { unique: true })
@Entity()
export class QuestionPaper {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @CreateDateColumn()
  created_at!: Date;

  @Column()
  @UpdateDateColumn()
  updated_at!: Date;

  @Column()
  totalMarks!: number;

  @Column()
  semester!: string;

  @ManyToOne(() => Course, (c) => c.id)
  course!: Course;

  @ManyToOne(() => Programme, (c) => c.id)
  programme!: Programme;

  @ManyToMany(() => Question)
  @JoinTable({
    name: 'qpaper_question',
    joinColumn: {
      name: 'qpaper',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'question',
      referencedColumnName: 'id',
    },
  })
  questions!: Question[];
}
