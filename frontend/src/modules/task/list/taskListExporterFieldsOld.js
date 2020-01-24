import model from 'modules/task/taskModel';

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.createdAt,
  fields.updatedAt
];
