//to fix error: "GraphQL middleware options must contain a schema."

const graphql = require('graphql');
const axios = require('axios');

//destructuralize a couple of properties...
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList
} = graphql;

const CompanyType = new GraphQLObjectType({
    name: 'Company',

    //the following arrow function solves curcilar dependency with UserType,
    //which is declared later
    fields: ()=>({
      id: { type: GraphQLString},
      name: { type: GraphQLString},
      description: { type: GraphQLString},
      users: {
        //there are many users for one company
        type: new GraphQLList(UserType),
        resolve(parentValue, args) {
          return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`)
            .then(res => res.data);
        }
      }
    })
});

//describes our types
//capitalize the name of user type as a convention
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: ()=>({
    id: { type: GraphQLString},
    firstName: { type: GraphQLString},
    age: { type: GraphQLInt},
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
         return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
           .then(res => res.data);
      }
    }
  })
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
    },
    company: {
      type: CompanyType,
      args: {id: {type: GraphQLString }},
      resolve(parentValue, args){
          //resolve function represents one oriented edge in graph of objects
          return axios.get(`http://localhost:3000/companies/${args.id}`)
          .then(resp=>resp.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
