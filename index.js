import express from 'express';
import * as swagger from 'swagger-ui-express';
import { readFile } from 'fs/promises';
import cors from 'cors';

const config = JSON.parse(
  await readFile('./swagger.json')
);

const app = new express();
app.use(cors());

app.use(
    '/api-docs',
    swagger.serve, 
    swagger.setup(config)
  );

  app.listen(8888, () => console.log('Serveur is running on port 8888...'));


  // "schema": {
                    //     "type": "array",
                    //     "items": {
                    //         "$ref": "#/definitions/Product"
                    //     }
                    // }

