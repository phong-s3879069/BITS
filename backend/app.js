const app = require('express')();
console.log('hello');
require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser');

const auth = require('./routes/signUpLogin/auth')
const postDetailsRoute = require('./routes/forums/postDetailsRoute');
const postRoute = require('./routes/forums/postRoute')

app.use(morgan("common"))
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/auth', auth);
app.use('/postdetails', postDetailsRoute);

app.use('/forums', postRoute)



module.exports = app;