const monk = require('monk');

const connectionString = process.env.MONGODB_URI || 'mongodb+srv://ArtAlex:artalex213015@artalex.7tt8e.mongodb.net/Teste?retryWrites=true&w=majority';
const db = monk(connectionString);

module.exports = db;