const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
  .values;
const myListService = require('../../services/myListService');

module.exports = async (req, res) => {
  try {
    new PermissionChecker(req).validateHas(
      permissions.myListCreate,
    );

    const payload = await new myListService(req).create(
      req.body.data,
    );

    res.status(200).send(payload);
  } catch (error) {
    if ([400, 403, 404].includes(error.code)) {
      return res.status(error.code).send(error.message);
    }

    console.error(error);
    return res.status(500).send(error.message);
  }
};
