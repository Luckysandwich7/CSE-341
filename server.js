const express = require('express');
const app = express();
const mongodb = require('./db/connect.js');
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', require('./routes'))

mongodb.initDb((err) => {
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