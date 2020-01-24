import model from 'modules/list/listModel';

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.description,
  fields.project,
  fields.customer,
  fields.subscription,
  fields.user,
  fields.dueDate,
  fields.category,
  fields.state,
  fields.status,
  fields.createdAt,
  fields.updatedAt
];
