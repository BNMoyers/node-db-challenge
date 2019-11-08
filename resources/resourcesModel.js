//imports and dependencies
db = require('../data/dbConfig.js');

//exports
module.exports = {
    get,
    getById,
    add,
    update,
    remove
};

//helper functions
function get() {
    return db('resources');
}

function getById(id) {
    return db('resources')
        .where({ id })
        .first();
}

function add(resource) {
    return db('resources')
            .insert(resource);
   
}

function update(id, changes) {
    return db('resources')
            .where({ id })
            .update(changes);
}

function remove(id) {
    return db('resources')
            .where('id', id)
            .del();
}
