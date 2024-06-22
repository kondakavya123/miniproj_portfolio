import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { Length } from 'class-validator';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  @Column()
  @Length(0, 1000)
  docUrl!: string;

  @Column()
  fileName!: string;

  constructor(docUrl: string, fileName: string) {
    this.docUrl = docUrl;
    this.fileName = fileName;
  }
}
