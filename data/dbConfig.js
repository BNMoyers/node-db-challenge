const knex = require('knex');
const knexCongfi = require('../knexfile');

module.exports = knex(knexConfig.development);