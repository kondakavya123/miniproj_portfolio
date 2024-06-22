// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   ManyToOne,
//   JoinColumn,
//   OneToOne,
//   ManyToMany,
//   JoinTable,
// } from 'typeorm';
// import { Department } from './Department.entity';
// import { Programme } from './Programme.entity';

// @Entity()
// export class Faculty {
//   @PrimaryGeneratedColumn()
//   id!: number;

//   @Column({ length: 50 })
//   facultyName!: string;

//   @ManyToOne(() => Department, (department) => department.id)
//   @JoinColumn()
//   department!: Department;

//   @ManyToMany(() => Programme)
//   @JoinTable({
//     name: 'faculty_programme',
//     joinColumn: {
//       name: 'faculty',
//       referencedColumnName: 'id',
//     },
//     inverseJoinColumn: {
//       name: 'programme',
//       referencedColumnName: 'id',
//     },
//   })
//   programmes!: Programme[];
// }
