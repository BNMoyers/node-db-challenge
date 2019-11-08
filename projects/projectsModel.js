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
    return db('projects')
                .intToBool();
}

function getById(id) {
    return db('projects')
            .intToBool()
            .where({ id })
}

function getTasks(project_id) {
    return db('tasks')
            .intToBool()
            .where('project_id', project_id)
            .first();
}

function add(project) {
    return db('projects')
            .boolToInt()
            .insert(project)
            .then(ids => {
                return getById(ids[0])
            });
}

function add(task) {
    return db('tasks')
            .boolToInt()
            .insert(task)
            .then(id => {
                return db('tasks')
                        .where({ id })
            })
}
function update(id, changes) {
    return db('projects')
            .boolToInt()
            .where({ id })
            .update(changes);
}
function updateTask(id, changes) {
    return db('tasks')
            .boolToInt()
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
