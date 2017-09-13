# udemy-react
React code examples related to Udemy course https://www.udemy.com/react-redux

examples:

- videos: simple youtube video browser using React only
- books: demonstration of handling state with react-redux
- weather: middleware demonstration with redux-promise, axios and react-sparklines
- blog: small app demonstration using axios, redux-promise, react-router and redux-form
- users: first app with graphql
-- express: node.js backend server hosting graphiql
-- json-server: simulates external data source by serving json file (see json:server in package.json)
-- nodemon: watches and reloades source files (see dev in package.json)

notes from rallycoding:

- redux-thunk: action creators returns functions instead of action objects
- reselect: allows to derive state using selectors
- onEnter: instead of fetching data in componentWillMount, use onEnter callback from redux-router
- react CSS transition groups: for animations like fade in/out for adding/removing things
- modal dialogs: if placed as children component in React component tree, there can be problems with CSS, z-index and so on. Place it as Document children instead and wrap with redux providing store

install:

- npm install
- npm start
- check localhost:8080

for installing additional libraries, use npm install with save option, for example:

- npm install --save lodash

starting node.js server (for users example):

- node server.js

to start json-server (as defined in package.json) use:

- npm run json:server

and than check the http://localhost:3000/users
