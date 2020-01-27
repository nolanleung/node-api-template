'use strict';
const glob = require('glob');
const _ = require('lodash');

const startMatch = `${__dirname}/`;
const controllers = {};

/**
 * Build controller objects using folders and files.
 * For example, controllers/example/get.js
 * Will result in the following object:
 * {
 *    example: {
 *      get: require('example/get.js')
 *    }
 * }
 */
glob
  .sync(__dirname + '/**/*.js')
  .map(f => f.slice(f.indexOf(startMatch) + startMatch.length + 1))
  .map(f => f.split('/'))
  .filter(f => f.length > 1) // filter index.js
  .forEach(parts => {
    const controller = require(`${__dirname}/${parts.join('/')}`);
    const path = parts.join('.').replace(/.js$/, '');

    _.set(controllers, path, controller);
  });

module.exports = controllers;
