//to fix error: "GraphQL middleware options must contain a schema."

const graphql = require('graphql');
const _ = require('lodash');

//destructuralize a couple of properties...
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [
  { id: '23', firstName : 'Bill', age: '20'},
  { id: '42', firstName : 'John', age: '23'}
];

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
        return _.find(users, {id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
