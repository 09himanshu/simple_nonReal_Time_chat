const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('./config/server.config');
const db = require('./models');

// Built-in middleware
const app = express();
app.use(bodyParser.json());
app.use(morgan("common"));

// Database connection
db.sequelize.sync({force: true}).then(() => {
    console.log(`Database connected`);
}).catch(err => {
    console.log(`Error occur at db connection ${err}`);
})

// Routes 
require('./routes/auth.routes')(app);
require('./routes/chat.routes')(app);

// port
app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
})


