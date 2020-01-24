import model from 'modules/list/listModel';

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.description,
  fields.project,
  fields.task,
  fields.createdAt,
  fields.updatedAt
];
