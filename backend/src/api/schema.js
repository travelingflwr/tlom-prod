const makeExecutableSchema = require('graphql-tools')
  .makeExecutableSchema;
const resolvers = require('./resolvers');

const petTypes = require('./pet/types');
const petQueries = require('./pet/queries');
const petMutations = require('./pet/mutations');

const bookingTypes = require('./booking/types');
const bookingQueries = require('./booking/queries');
const bookingMutations = require('./booking/mutations');

const types = [
  ...petTypes,
  ...bookingTypes,
].map((type) => type.schema);

const mutations = [
  ...petMutations,
  ...bookingMutations,
].map((mutation) => mutation.schema);

const queries = [
  ...petQueries,
  ...bookingQueries,
].map((query) => query.schema);

const query = `
  type Query {
    ${queries.join('\n')}
  }
`;

const mutation = `
  type Mutation {
    ${mutations.join('\n')}
  }
`;

const schemaDefinition = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [schemaDefinition, query, mutation, ...types],
  resolvers,
});