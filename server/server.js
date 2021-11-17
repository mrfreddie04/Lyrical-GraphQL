const express = require('express');
const models = require('./models');
const {graphqlHTTP} = require('express-graphql')
const mongoose = require('mongoose');
const cors = require("cors");

const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
const mongoUrl = require('./key')
if (!mongoUrl) {
  throw new Error('You must provide a MongoDB URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB instance.'))
    .on('error', error => console.log('Error connecting to MongoDB:', error));

app.use(cors());    
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening on port 4000');
});

module.exports = app;
