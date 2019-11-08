//imports and dependencies
const express = require("express");
const db = require("./resourcesModel");
const router = express.Router();

//Create
router.post("/", validateResource, (req, res) => {
  const body = req.body;
  db.add(body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json("could not add resource");
    });
});

//Read
router.get("/", (req, res) => {
  db.get()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json("failed to retrieve resources");
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    db.getById(id)
        .then(resources => {
            resource
            ? res.json(resource)
            : res.status(404).json('no resource to retrieve')
        })
        .catch(err => {
            res.status(500).json('could not get resource')
        })
})

//Edit

//Delete

//validation middleware

function validateResource(req, res, next) {
  const name = req.body.resource_name;

  !name ? res.status(400).json("please enter a resource name")
   : next();
}

//exports

module.exports = router;
