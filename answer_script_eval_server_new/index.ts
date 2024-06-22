import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

const allowedOrigins = ['http://localhost:3000']; //telling browser to allow the req from this port

const options: cors.CorsOptions = {
  credentials: true,
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./uploads'));

import { AppDataSource } from './data-source'; //connecting AppDataSource from data-source file.
import { ApplicationRoutes } from './src/routes/applicationrouter';
AppDataSource.initialize(); //initialise AppDataSource.

app.listen(8080, () => {
  console.log('server started at port 8080');
});

app.use('/api', new ApplicationRoutes().router);

app.get('/health', (req: Request, res: Response) => {
  //creating health API and type of request coming from express
  res.send('server health is good'); //to see this in server write localhost:8000/health
  // res.send({message:"server health is good"});    //to see o/p in json format.
});
