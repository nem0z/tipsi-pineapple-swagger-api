import * as swagger from 'swagger-ui-express';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

export default function(url, host = "localhost:3000") {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    return readFile(`${__dirname}/swagger.json`)
        .then(data => JSON.parse(data))
        .then(json => ({ ...json, host: host }))
        .then(config => [url, swagger.serve, swagger.setup(config)]);
}