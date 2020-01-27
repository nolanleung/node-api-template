'use strict';
require('dotenv').config({ path: __dirname + '/.env.test' });

const knex = require('./src/lib/knex');
const factories = require('./__tests__/factories');

factories.init();

afterAll(() => {
  knex.destroy();
});
