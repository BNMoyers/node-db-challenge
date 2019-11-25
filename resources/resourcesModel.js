//imports and dependencies
const db = require('../data/dbConfig.js');

//exports
module.exports = {
    retrieve,
    retrieveById,
    add
    
};

//helper functions

function retrieve() {
    return db("resources")
}

function retrieveById(id) {
    return db("resources")
    .where({ id })
    .first();
}

function add(resource) {
    return db("resources").insert(resource);
}