import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  //creating object is the key value pair eg. type is key and it has value.
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: ['./src/entity/**.entity.ts'],
});

AppDataSource.initialize() //promise function if promise is made execute it or else catch error.
  .then(() => {
    console.log(
      '\x1b[33m',
      `********** ${process.env.DB_HOST} database connected **********`,
      '\x1b[33m',
    );
  })
  .catch((error) => console.log('error in connection - ', error));
