pgp = require('pg-promise')();
exports.db = pgp('postgres://postgres:postgres@localhost:5432/blockchain');
