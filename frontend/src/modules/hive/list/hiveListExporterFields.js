import model from 'modules/hive/hiveModel';

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.description,
  fields.customer,
  fields.subscription,
  fields.user,
  fields.mylom,
  fields.category,
  fields.status,
  fields.state,
  fields.createdAt,
  fields.updatedAt
];
