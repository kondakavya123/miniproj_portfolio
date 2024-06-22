/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Department } from './Department.entity';
import { UserRole } from './UserRole.entity';
import { Programme } from './Programme.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ length: 50 })
  firstName!: string;

  @Column({ length: 50 })
  lastName!: string;

  @Column({ length: 50 })
  username!: string;

  @Column({ length: 100 })
  password!: string;

  @Column({ length: 50 })
  email!: string;

  @Column({ type: 'varchar', length: 20 })
  contactNumber!: number;

  @Column('boolean', { default: true })
  isActive = true;

  @ManyToOne(() => Department, (department) => department.id)
  @JoinColumn()
  department!: Department;

  @ManyToMany(() => Programme)
  @JoinTable({
    name: 'faculty_programme',
    joinColumn: {
      name: 'faculty',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'programme',
      referencedColumnName: 'id',
    },
  })
  programmes!: Programme[];

  @ManyToOne(() => UserRole, (role) => role.id, { nullable: false })
  @JoinColumn()
  role!: UserRole;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
