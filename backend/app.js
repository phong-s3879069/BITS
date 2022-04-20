const app = require('express')();
console.log('hello');
require('dotenv').config();

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

//"mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb"
//"mongodb+srv://myuser:mypassword@cluster0.1lbnn.mongodb.net/testdb"


module.exports = app;