import express from 'express';
import cors from 'cors';
import swagger from './index.js';

const app = new express();
app.use(cors());

app.use(...await swagger('/api-docs'));

app.listen(8888, () => console.log('Serveur is running on port 8888...'));

