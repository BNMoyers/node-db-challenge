//imports and dependencies
db = require('../dbConfig.js');

//exports
module.exports = {
    get,
    getById,
    add,
    update,
    delete
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
            .insert(resource)
            .then(ids => {
                return getById(ids[0])
            });
}

function update(id, changes) {
    return db('resources')
            .where({ id })
            .update(changes);
}

function delete(id) {
    return db('resources')
            .where('id', id)
            .del();
}
