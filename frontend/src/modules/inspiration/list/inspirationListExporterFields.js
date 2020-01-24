import model from 'modules/inspiration/inspirationModel';

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.description,
  fields.photo,
  fields.tag,
  fields.createdAt,
  fields.updatedAt
];
