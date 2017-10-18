//to fix error: "GraphQL middleware options must contain a schema."

const graphql = require('graphql');
const axios = require('axios');

//destructuralize a couple of properties...
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
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

//GraphiQL query to create new user:
//mutation {
//  addUser(firstName:"Tom", age:35){
//    id
//    firstName
//    age
//  }
//}
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: {type: new GraphQLNonNull(GraphQLString) },
        age: {type: new GraphQLNonNull(GraphQLInt) },
        companyId: {type: GraphQLString }
      },
      resolve(parentValue, {firstName, age}){
        return axios.post(`http://localhost:3000/users`,
          { firstName, age })
        .then(resp=>resp.data);
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id }) {
        return axios.delete(`http://localhost:3000/users/${id}`)
          .then(res => res.data);
      }
    },
    //may change all or only some attributes
    //HTTP 'put' replaces all, 'patch' just some attributes
    editUser: {
      type: UserType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString) },
        firstName: {type: GraphQLString },
        age: {type: GraphQLInt },
        companyId: {type: GraphQLString }
      },
      resolve(parentValue, args){
        return axios.patch(`http://localhost:3000/users/${args.id}`, args)
        .then(resp=>resp.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
