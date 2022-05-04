'use strict';
// Package imports
import express from 'express'
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Local imports
const router = require('./router');
const db = require('./models/index');


const app: express.Application = express();
const HOST_NAME : string | undefined = process.env.HOST_NAME;
const PORT : string | undefined = process.env.PORT_NUMBER;

app
  .use(cors())
  .use(morgan('short'))
  .use(express.json())
  .use(router);

async function bootstrap () {
  try {
    await db.connection.authenticate();
    await db.connection.sync();
    app.listen(PORT, () => {
      console.log(`http://${HOST_NAME}:${PORT}/`);
    });
    } catch (error) {
      console.error('Failed to connect to DB');
    }
}
bootstrap();

module.exports = {app}