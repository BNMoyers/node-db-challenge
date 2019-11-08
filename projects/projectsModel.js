//imports and dependencies
const db = require("../data/dbConfig.js");

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
  remove,
  removeTask
};

//helper functions
function intToBool(int) {
  return int === 1 ? true : false;
}

function boolToInt(bool) {
  return bool === true ? 1 : 0;
}

function get() {
  return db("projects");
}

function getById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getTasks(id) {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "tasks.id",
      "projects.project_name",
      "projects.project_description",
      "tasks.task_description"
    )
    .where("project_id", project_id)
    .first();
}

function add(project) {
  return db("projects").insert(project);
}

function addTask(task) {
  return db("tasks").insert(task);
}
function update(id, changes) {
  return db("projects")
    .update(changes)
    .where("projects.id", id);
}

function remove(id) {
  return db("projects")
    .where("id", id)
    .del();
}
function removeTask(id) {
  return db("tasks")
    .where("id", id)
    .del();
}
