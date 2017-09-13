//to fix error: "GraphQL middleware options must contain a schema."

const graphql = require('graphql');
const axios = require('axios');

//destructuralize a couple of properties...
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

//describes our types
//capitalize the name of user type as a convention
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString},
    firstName: { type: GraphQLString},
    age: { type: GraphQLInt}
  }
});

//where to start querying int our graph of objects
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {id: {type: GraphQLString }},
      resolve(parentValue, args){
        //callback for fetching data
        //parentValue - ignore
        //args - all arguments passed into query

        return axios.get(`http://localhost:3000/users/${args.id}`)
          //.then( response=>console.log(response)) // {data: {firstName:...}}
          .then(resp=>resp.data);//extract data wrapped by axios response
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
