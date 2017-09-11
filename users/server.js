const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();


//graphiql - tool for development
app.use('/graphql', expressGraphQL({
  graphiql: true
}));

app.listen(4000, ()=>{
    console.log('Listing');
});
