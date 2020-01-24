const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
  .values;
const MylomService = require('../../services/mylomServiceUser');

const schema = `
  mylomAutocomplete(query: String, owner: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  mylomAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.mylomAutocomplete,
    );

    const filter = {
      query: args.query,
      owner: args.owner,
    };

    return new mylomService(context).findAllAutocomplete(
      filter,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;