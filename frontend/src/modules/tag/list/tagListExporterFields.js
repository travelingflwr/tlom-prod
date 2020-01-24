import model from 'modules/tag/tagModel';

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.description,
  fields.inspiration,
  fields.createdAt,
  fields.updatedAt
];
