'use strict';

// Package imports
import fs from 'fs'
import path from 'path'
import { Sequelize, Options } from 'sequelize';
import dotenv from 'dotenv'
import sequelize from 'sequelize';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const dbName = process.env.DB_NAME as string;
const dbUsername = process.env.DB_USERNAME as string;

const config: Options = {
  host: process.env.HOST_NAME,
  dialect: 'postgres',
  logging: false,
};


const connection = new Sequelize(
  dbName,
  dbUsername,
  process.env.DB_PASSWORD,
  config
);

const db : any = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'index.js' && file.includes('.schema.ts')) {
    const modelCreator = require(path.join(__dirname, file));
    const model = modelCreator(connection, sequelize.DataTypes);
    db[model.name] = model;
  }
}


console.log(db);


for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.connection = connection;
db.Sequelize = Sequelize;

export default db;
