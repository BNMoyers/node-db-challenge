const express = require('express');
const db = require('./resourcesModel');
const router = express.Router();

router.get('/', (req, res) => {
  db.retrieve()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json("failed to get resources")
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.retrieveById(id)
    .then(resource => {
      resource 
        ? res.json(resource)
        : res.status(404).json('could not find that resource')
    })
    .catch(err => {
      res.status(500).json('failed to get resource')
    })
})

router.post('/', (req, res) => {
  const resourceData = req.body;

  db.add(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json('failed to add new resource')
    })
})

module.exports = router;
