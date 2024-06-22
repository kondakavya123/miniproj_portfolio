import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Length } from 'class-validator';
import { Users } from './Users.entity';
import { Programme } from './Programme.entity';
import { Course } from './Course.entity';

@Entity()
export class ExamSchedule {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ type: 'date' }) // Use type 'date' to store only the date without time
  monAndYear!: Date;

  @Column()
  @Length(0, 50)
  semester!: string;

  @ManyToOne(() => Course, (ansScript) => ansScript.id)
  courseInfo!: Course;

  @ManyToMany(() => Programme)
  @JoinTable({
    name: 'examsche_programme',
    joinColumn: {
      name: 'examsche',
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
    name: 'examsche_faculty',
    joinColumn: {
      name: 'examsche',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'faculty',
      referencedColumnName: 'id',
    },
  })
  faculties!: Users[];
}
