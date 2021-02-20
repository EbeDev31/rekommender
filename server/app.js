require('dotenv').config()
const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const username_password = process.env.USERNAME_PASSWORD
console.log('Wow', username_password)
// allow cross-origin requests
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect(`mongodb+srv://${username_password}@cluster0.iuxv1.mongodb.net/ebegqldb`)
mongoose.connection.once('open', () => {
    console.log('conneted to database Zeeby');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
