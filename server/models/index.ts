'use strict';

// Package imports
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const config = {
  host: process.env.HOST_NAME,
  dialect: 'postgres',
  logging: false
};

console.log(process.env.ENVIROMENT, 'DOTENV _>');

let dbname = process.env.ENVIROMENT == 'testing' ? process.env.TEST_DB_NAME : process.env.DB_NAME;

const connection = new Sequelize(
  dbname,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  config
);
const db : any = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'index.js' && file.includes('.schema.js')) {
    const modelCreator = require(path.join(__dirname, file));
    const model = modelCreator(connection, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.connection = connection;
db.Sequelize = Sequelize;

export default db;
