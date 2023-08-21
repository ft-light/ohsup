import express from 'express';
import DB_connect from './config/db.js';
import User from './routes/auth.js';

DB_connect();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', User);

app.listen(port, () => console.log(`Listening in port ${port}`));