//dependencies and imports
require('dotenv').config();
const server = require('./server.js');

//port

const port = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`**server running on port ${PORT}`);
});