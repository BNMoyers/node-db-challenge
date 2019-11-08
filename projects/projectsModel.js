//imports and dependencies
const db = require('../data/dbConfig.js');

//exports
module.exports = {
    intToBool,
    boolToInt,
    get,
    getTasks,
    getById,
    add,
    addTask,
    update,
    updateTask,
    remove,
    removeTask
};

//helper functions
function intToBool(int) {
    return int === 1
            ? true
            : false
}

function boolToInt (bool) {
    return bool === true 
            ? 1
            : 0
}

function get() {
    return db('projects')
}

function getById(id) {
    return db('projects')
            .where({ id })
}

function getTasks(project_id) {
    return db('tasks')
            .where('project_id', project_id)
            .first();
}

function add(project) {
    return db('projects')
            .insert(project)
            .then(ids => {
                return getById(ids[0])
            });
}

function addTask(task) {
    return db('tasks')
            .insert(task)
            .then(id => {
                return db('tasks')
                        .where({ id })
            })
}
function update(id, changes) {
    return db('projects')
            .where({ id })
            .update(changes);
}
function updateTask(id, changes) {
    return db('tasks')
            .where({ id })
            .update(changes);
}

function remove(id) {
    return db('projects')
            .where('id', id)
            .del();
}
function removeTask(id) {
    return db('tasks')
            .where('id', id)
            .del();
}
