import express from 'express';
import DB_connect from './config/db.js';

DB_connect();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => console.log(`Listening in port ${port}`));``