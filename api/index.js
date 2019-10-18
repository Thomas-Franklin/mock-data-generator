const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes/routes')
const helmet = require('helmet');
const mongoose = require('mongoose')

mongoose.connect(`mongodb://${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || '27017'}/${process.env.DB_TABLE || 'mongo'}`)

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes)

app.listen(port, () => console.log(`api listening on port ${port}!`))