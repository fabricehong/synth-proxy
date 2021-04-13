import express from 'express';
import { PROXY_CONFIGURATION } from '../proxy/configuration';
import passTLHeaders from './headers.json';
import passTLHeadersBackup from './headers-backup.json';
import calleoHeaders from './headers-calleo.json';

const headers = passTLHeaders;

export const corsRouter = express.Router();

const HEADERS_TO_IGNORE = [
    'transfer-encoding',
];
/*
corsRouter.get('/', function(req, res, next) {
    res.status(200).send(PROXY_CONFIGURATION);
});
*/
corsRouter.post('/', function(req, res, next) {
    console.log('ok');
    //res.status(200).send(PROXY_CONFIGURATION);
    res.set('Access-Control-Allow-Origin', '*');
    res.send('pok');
});

corsRouter.options('/df', function(req, res, next) {
    console.log('options');
    //res.status(200).send(PROXY_CONFIGURATION);

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', '*');
    res.send('ok');


});

corsRouter.options('/', function(req, res, next) {
    console.log('options');
    //res.status(200).send(PROXY_CONFIGURATION);

    console.log(headers);
    const hdrs = { };
    headers.forEach(header => {
        if (!HEADERS_TO_IGNORE.includes(header.key.toLowerCase())) {
            console.log(`${header.key}->${header.value}`);

            const v = hdrs[header.key];
            if (!v) {
                hdrs[header.key] = header.value;
            } else if (!Array.isArray(v)) {
                hdrs[header.key] = [v, header.value];
            } else {
                const a = [
                    ...v,
                    header.value
                ];
                hdrs[header.key] = a;
            }
            //res.set(header.key, header.value);
        }
    });
    console.log(hdrs);
    //res.set('Vary', ['Origin', 'Access-Control-Request-Method', 'Access-Control-Request-Headers']);

    res.writeHeader(200, {
            ...hdrs,

        }
        )
    res.end();
    //res.send('ok');


});
