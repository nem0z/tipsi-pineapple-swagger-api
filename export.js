import * as swagger from 'swagger-ui-express';
import { readFile } from 'fs/promises';

export default function(url, host = "localhost:3000") {
    return readFile('./swagger.json')
        .then(data => JSON.parse(data))
        .then(json => ({ ...json, host: host }))
        .then(config => [url, swagger.serve, swagger.setup(config)]);
}