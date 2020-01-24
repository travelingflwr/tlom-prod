import model from 'modules/project/projectModel';

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.description,
  fields.customer,
  fields.subscription,
  fields.list,
  fields.createdAt,
  fields.updatedAt
];
