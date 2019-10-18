const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes/routes')
const mongoose = require('mongoose')

mongoose.connect(`mongodb://${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || '27017'}/${process.env.DB_TABLE || 'mongo'}`)

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes)

app.listen(port, () => console.log(`api listening on port ${port}!`))
