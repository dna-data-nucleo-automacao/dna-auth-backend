import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import cors from 'cors';

import empresaRoutes from './src/routes/empresaRoute.js';

class App{
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes(){
    this.app.use('/empresa', empresaRoutes);
  }
}

export default new App().app;
