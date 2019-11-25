//imports and dependencies
const express = require('express');
const db = require('./data/dbConfig');
const projectsRouter = require('./projects/projectsRouter');
const resourcesRouter = require('./resources/resourcesRouter')


//server
const server = express();

//middleware
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter )

//test
// server.get('/', (req, res) =>{
//     res.send('testing')
// } );

//export

module.exports = server;