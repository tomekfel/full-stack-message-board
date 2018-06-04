const monk = require('monk');
const connectionString = process.env.PROD_MONGODB || 'localhost/messageboard';
const db = monk(connectionString);

module.exports = db;