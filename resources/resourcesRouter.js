//imports and dependencies
const express = require('express')
const db = require('../data/dbConfig')
const router = express.Router();

//Create
router.post('/', validateResource, (req, res) => {
    const body = req.body;
    db.insert(body)
        .then(resource => {
            res.status(201).json({ resource })
        })
        .catch(err => {
            res.status(500).json('could not add resource')
        })
})

//Read
router.get('/', (req, res) => {
    db('resources')
        .then(resources => {
            res.json(resources);
        })
        .catch (err => {
            res.status(500).json('failed to retrieve resources')
        })
})

//Edit

//Delete

//validation middleware

function validateResource(req, res, next) {
    const name = req.body.name;

    !name
        ? res.status(400).json('please enter a resource name')
        : next();
}

//exports

module.exports = router;