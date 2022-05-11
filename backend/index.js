const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const mongoose = require('mongoose');
const { MONGO_URI } = process.env;
const { SERVER_PORT } = process.env;
// const news_category_list = require('./news_category.json')
// const news_categories = require('./models/news_category')
// const lesson_category_list = require('./lesson_category.json')
// const lesson_categories = require('./models/lesson_category')
mongoose
    .connect(MONGO_URI)

    .then(() =>
        server.listen(SERVER_PORT, () => {
            console.log(
                `Server running on port ${SERVER_PORT}. Database successfully connected`
            );
            // lesson_category_list.map(async (element, index) => {
            //     lesson_categories.lesson_category.create(
            //         { name: element.name },
            //         function (error, data) {
            //             if (error) {
            //                 console.log(error);
            //             } else {
            //                 console.log(data);
            //             }
            //         }
            //     );
            // });
        })
    )
    .catch((error) => console.log(error.message));