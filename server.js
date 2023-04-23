const express = require('express');
const app = express();
const mongodb = require('./db/connect.js');
const port = process.env.PORT || 3000;

// app.use('/', require('./router'))

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
// app.listen(port, () => {
//     console.log(`Running on port ${port}`)
// })