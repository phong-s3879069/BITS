const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const mongoose = require('mongoose');
const { MONGO_URI } = process.env;
const { SERVER_PORT } = process.env;
// const post_category_list = require('./post_category.json')
// const post_categories = require('./models/post_category')
mongoose
    .connect(MONGO_URI)

    .then(() =>
        server.listen(SERVER_PORT, () => {
            console.log(
                `Server running on port ${SERVER_PORT}. Database successfully connected`
            );
            // post_category_list.map(async (element, index) => {
            //     post_categories.post_category.create(
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