import model from 'modules/task/taskModel';

const { fields } = model;

export default [
  fields.name,
  fields.description,
  fields.dueDate,
  fields.customer,
  fields.user,
  fields.subscription,
  fields.category,
  fields.state,
  fields.status,
  fields.parent,
];
