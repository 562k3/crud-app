import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import router from './routes/route.js';
import cors from 'cors';
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE'
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

const app = express();
app.use(cors(corsOpts));

dotenv.config();
app.use(bodyParser.json({ extented: true }));
app.use(bodyParser.urlencoded({ extented: true }));

app.use('/', router);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));