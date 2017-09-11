const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();


//graphiql - tool for development
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, ()=>{
    console.log('Listing');
});
