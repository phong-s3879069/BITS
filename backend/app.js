const app = require('express')();
console.log('hello');
require('dotenv').config();

const cors = require('cors');
const bodyParser = require('body-parser');

const auth = require('./routes/signUpLogin/auth')
// const verifyEmail = require('./routes/signUpLogin/verifyEmail');
// const verifyResetLink = require('./routes/signUpLogin/getResetLink');

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/auth', auth);
// app.use('/', verifyEmail);
// app.use('/', verifyResetLink);


module.exports = app;