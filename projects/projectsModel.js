//imports and dependencies
db = require('../dbConfig.js');

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
    delete,
    deleteTask
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
    return db('projects');
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

function add(task) {
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

function delete(id) {
    return db('projects')
            .where('id', id)
            .del();
}
function deleteTask(id) {
    return db('tasks')
            .where('id', id)
            .del();
}
