import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import './database/index';
import './container/index';

const app = express();
app.use(express.json());
app.use(routes);

const port = 3333;

app.listen(port, () => {
  console.log('🚀 server on');
});
