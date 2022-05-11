const app = require('express')();
console.log('hello');
require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser');

const auth = require('./routes/signUpLogin/auth');
const postDetailsRoute = require('./routes/forums/postDetailsRoute');

const conversationRoute = require('./routes/chat/conversationRoute');
const messageRoute = require('./routes/chat/messageRoute');

const postRoute = require('./routes/forums/postRoute')
const profileRoute = require('./routes/profile/profileRoute')

const lessonRoute = require('./routes/lesson/lessonRoute')
const newsRoute = require('./routes/news/newsRoute')

app.use(morgan("common"))
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/auth', auth);
app.use('/postdetails', postDetailsRoute);


app.use('/forums', postRoute)
app.use('/profilePage', profileRoute);

app.use('/conversations', conversationRoute);
app.use('/messages', messageRoute);

app.use('/lessonPage', lessonRoute);

app.use('/newsPage', newsRoute)


module.exports = app;