import model from 'modules/mylomtest/mylomTestModel';

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.description,
  fields.user,
  fields.customer,
  fields.subscription,
  fields.dueDate,
  fields.category,
  fields.state,
  fields.status,
  fields.createdAt,
  fields.updatedAt
];
