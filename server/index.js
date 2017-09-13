'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const IS_DEV = process.env.NODE_ENV !== 'production';
const NGROK = (IS_DEV && process.env.ENABLE_TUNNEL) && require('ngrok');
const path = require('path');
const winston = require('winston');
const log = new (winston.Logger)({
    'transports': [
        new (winston.transports.Console)(),
        new (winston.transports.File)({'filename': 'error.log'})
    ]
});
const server = new Hapi.Server();
const port = process.env.PORT || 8080;
const routes = [];

server.connection({'port': port});

let middleware = [Inert];

server.register(middleware, error => {
    if (error) {
        log.error(error);
        throw error;
    }
});

function catchAll(request, reply) {
    if (request.path.indexOf('/api') > -1) {
        return; // api call
    }

    if (request.path === '/') {
        reply.file(path.join(__dirname, '../build/index.html'));
    } else {
        reply.file(path.join(__dirname, `../build/${request.path}`));
    }
}

routes.push({
    'method': 'GET',
    'path': '/{param*}',
    'handler': catchAll
});

server.route(routes);

server.on('response', function response(request) {
    const remoteAddress = request.info.remoteAddress;
    const method = request.method.toUpperCase();
    const path = request.url.path;
    const statusCode = request.response.statusCode;

    log.info(`${remoteAddress}: ${method} ${path} --> ${statusCode}`);
});

server.start((error) => {
    if (error) {
        log.error(error);
        throw error;
    }

    log.info(`LAN: http://localhost:${port}`);

    // Connect to ngrok in dev mode
    if (NGROK) {
        NGROK.connect(port, (innerErr, url) => {
            if (innerErr) {
                return log.error(innerErr);
            }

            log.info(`Proxy: ${url}`);
        });
    }
});

