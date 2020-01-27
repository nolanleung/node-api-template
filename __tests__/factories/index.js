'use strict';

const fs = require('fs');
const { Factory } = require('rosie');

exports.init = () => {
  const files = fs.readdirSync(__dirname).filter(n => n !== 'index.js');
  files.forEach(file => require('./' + file));
};

exports.build = Factory.build;
