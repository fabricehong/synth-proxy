import express from 'express';
import { PROXY_CONFIGURATION } from '../proxy/configuration';

export const indexRouter = express.Router();


indexRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Synthese API POC' });
});
