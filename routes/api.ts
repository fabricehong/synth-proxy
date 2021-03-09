import express from 'express';
import { PROXY_CONFIGURATION } from '../proxy/configuration';
import _ from 'lodash';
export const apiRouter = express.Router();
import queryString from 'querystring';


function appendQueryString(path: string, queryParameters: any) {
    if (Object.keys(queryParameters).length = 0) {
        return path;
    }

    const separator = path.indexOf('?') === -1 ? '?' : '&';

    return `${path}${separator}${queryString.stringify(queryParameters)}`
}

PROXY_CONFIGURATION.paths.forEach(path => {
    apiRouter.get(path.url, (req, res, next) => {
        console.log(req.params);
        const queryParameters: any = {};
        if (path.parameters) {
            path.parameters.forEach(parameter => {
                const value = req.query[parameter.name];
                if (value) {
                    queryParameters[parameter.mapsTo] = value;
                }
            })
        }
        //const redirect = Object.keys(queryParameters).length > 0 ? `${path.redirect}`
        res.redirect(appendQueryString(path.redirect, queryParameters));
    });
});



apiRouter.get('/test', function(req, res, next) {
    const queryParameters: any = {'salut': 2};
    const tst = '?SERVICE=objectlist&table_id=26&of=json';
    const tst2 = 'http://new-interface-test-tl.t-l.ch/?SERVICE=objectlist&table_id=26&of=json';
    res.status(200).send(appendQueryString(tst2, queryParameters));
});
