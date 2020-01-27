'use strict';
const db = require('../../lib/knex');

module.exports = async ctx => {
  const records = await db('examples').select('*');

  ctx.body = {
    success: true,
    time: Date.now(),
    records,
  };
};
