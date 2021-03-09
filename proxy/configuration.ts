import { ProxyConfiguration } from './ProxyConfiguration';

export const PROXY_CONFIGURATION: ProxyConfiguration = {
    paths: [
        {
            url: '/users',
            redirect: 'http://new-interface-test-tl.t-l.ch/?SERVICE=objectlist&table_id=26&of=json'
        },
        {
            url: '/stops/commercial',
            redirect: 'http://new-interface-test-tl.t-l.ch/?SERVICE=StopAreasListFunction&output_stops=1&output_lines_in_stops=0&of=json',
            parameters: [
                {
                    name: 'stopId',
                    mapsTo: 'roid',
                }
            ]
        }
    ]
};


// http://new-interface-test-tl.t-l.ch/?SERVICE=objectlist&table_id=26&of=json

// http://new-interface-test-tl.t-l.ch/?SERVICE=StopAreasListFunction&roid=1970329131941941&output_stops=1&output_lines_in_stops=0&of=json
