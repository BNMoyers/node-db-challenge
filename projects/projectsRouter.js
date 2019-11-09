//imports and dependencies
const express = require("express");
const db = require("./projectsModel");
const router = express.Router();



//Create
router.post('/', (req, res) => {
  const projectData = req.body;

  db.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({errorMessage: 'Failed to Create Project'})
    })
})

router.post('/:id/tasks', (req, res) => {
  const taskData = req.body;
  const { id } = req.params;

  db.retrieveById(id)
  .then(project => {
            db.addTask(taskData)
            .then(task => {
                  res.status(201).json(task);
            })
  })
  .catch( err => {
    res.status(500).json({errorMessage: 'Failed to Create Task'})
  })
})

//Read
router.get('/', (req, res) => {
  db.retrieve()
    .then(projects => {
      res.status(201).json(projects);
    })
    .catch(err => {
      res.status(500).json({errorMessage: 'Failed to get projects'})
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.retrieveById(id)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      res.status(500).json({errorMessage: 'Failed to get Project'})
    })
})

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  db.retrieveTasks(id)
    .then(tasks => {
      let taskList = tasks.map(task => ({...task}))
       return  res.status(201).json(taskList)
    })
    .catch(err => {
      res.status(500).json({errorMessage: 'Failed to get Tasks'})
    }
)})

//exports

module.exports = router;
