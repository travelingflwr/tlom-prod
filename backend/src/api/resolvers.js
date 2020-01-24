const mergeResolvers = require('./shared/utils/mergeGraphqlResolvers');

const sharedTypes = require('./shared/types');





const petTypes = require('./pet/types');
const petQueries = require('./pet/queries');
const petMutations = require('./pet/mutations');

const bookingTypes = require('./booking/types');
const bookingQueries = require('./booking/queries');
const bookingMutations = require('./booking/mutations');

const types = [
  ...petTypes,
  ...bookingTypes,
].map((type) => type.resolver);

const queries = [
  ...petQueries,
  ...bookingQueries,
].map((query) => query.resolver);

const mutations = [
  ...petMutations,
  ...bookingMutations,
].map((mutation) => mutation.resolver);

module.exports = mergeResolvers(types, queries, mutations);