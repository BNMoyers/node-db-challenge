//imports and dependencies
const express = require("express");
const db = require("./projectsModel");
const router = express.Router();

//Create
router.post("/", validateProject, (req, res) => {
  const body = req.body;
  db.add(body)
    .then(project => {
      res.status(201).json({ project });
    })
    .catch(err => {
      res.status(500).json("could not add resource");
    });
});

// router.post('/:id/tasks', validateProjectId, validateTask, (req, res) => {
//     const body = req.body;
//     body.project_id = req.params.id;

//     db
//         .add(body)
// })

//Read
router.get("/", (req, res) => {
  db
    .get()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json("failed to retrieve projects");
    });
});

router.get("/:id", validateProjectId, (req, res)=>{
    res.status(201).json(req.project);
})

router.get("/id/tasks", validateProjectId, (req, res) => {

})

//Edit

//Delete

//validation middleware

function validateProject(req, res, next) {
  const name = req.body.project_name;

  !name ? res.status(400).json("please enter a project name")
   : next();
}

function validateProjectId(req, res, next) {
  const id = req.params.id;
  db.getById(id)
    .then(project => {
      !project
        ? res.status(404).json("could not find project")
        : (req.project = project);
      next();
    })
    .catch(err => {
      res.status(400).json({ err });
    });
}

function validateTask(req, res, next) {
  const name = req.body.task_description;
  const id = req.body.project_id;
  !name || !id
    ? res.status(400).json("please enter a description and project id")
    : next();
}

//exports

module.exports = router;
