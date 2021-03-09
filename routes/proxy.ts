import express from 'express';
import { PROXY_CONFIGURATION } from '../proxy/configuration';

export const proxyRouter = express.Router();


proxyRouter.get('/', function(req, res, next) {
    res.status(200).send(PROXY_CONFIGURATION);
});
