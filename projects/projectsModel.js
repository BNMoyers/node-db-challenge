//imports and dependencies
const db = require("../data/dbConfig.js");

//exports
module.exports = {
  retrieve,
  retrieveById,
  retrieveTasks,
  add,
  addTask
};

//helper functions

function retrieve() {
  return db("projects")
  .then(projects => {
    return projects.map(project => {
      project.project_completion = project.project_completion ? true: false;
      return project;
    })
  });
}

function retrieveById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function retrieveTasks(id) {
  return db("tasks")
  .join("projects", "tasks.id", "tasks.project_id")
  .select(
    "tasks.id",
    "tasks.project_id",
    "projects.project_name",
    "tasks.task_description"
  )
  .where("tasks.project_id", id)
  
}

function add(project) {
  return db("projects").insert(project)
}

function addTask(task){
  return db("tasks").insert(task)
}