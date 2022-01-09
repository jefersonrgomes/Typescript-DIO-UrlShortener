/*
No JavaScript para importarmos o express utilizamos o metodo require
const express = require('express');

Em Typescrip diferente do JavaScript, para importarmos o express, utilizamos o método import
    import express, { Request, Response, NextFunction} from 'express';
*/
import express from 'express';
import { appendFile } from 'fs';
import { StatusCodes } from 'http-status-codes';
import indexRoute from './routes/index.route';

const api = express();


//APPLICATION CONFIG AND MIDLEWARES
api.use(express.json()); //Definindo json como padrão para nossa API Rest

//ROUTES CONFIG
api.use(indexRoute);//Informando que nossa API se guiara por Rotas
//api.use(StatusCodes);
//api.use(authorizationRoute);

//INICIANDO SERVIDOR 
api.listen(5000, () => console.log("Servidor iniciado com sucesso!"));
