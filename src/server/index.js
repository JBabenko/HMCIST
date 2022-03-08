const express = require('express');
const nextApp = require('next');
const mongoose = require('mongoose');
require('dotenv').config();

const ssrPort = Number(process.env.SSR_PORT) || 3000;
const ssrHost = process.env.SSR_HOST || 'localhost';
const dev = process.env.NODE_ENV !== 'production';
const app = nextApp({ dev });
const dbUrl = process.env.DATABASE_URL;

const runApp = async () => {
  await app.prepare();
  const handle = app.getRequestHandler();
  const server = express();

  await mongoose.connect(dbUrl);

  server.all('*', (req, res) => handle(req, res));

  server.listen(ssrPort, ssrHost, () => {
    console.log(`> Ready on ${ssrHost}:${ssrPort}`);
  });
};

runApp().catch(() => console.log('Failed to prepare app'));
