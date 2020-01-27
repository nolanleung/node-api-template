/* istanbul ignore file */
'use strict';
require('dotenv').config();

const { name, version } = require('../package.json');
const app = require('./app');

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`${name}@${version} listening on port ${PORT}`);
});
