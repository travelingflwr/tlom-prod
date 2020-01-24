import model from 'modules/category/categoryModel';

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.user,
  fields.createdAt,
  fields.updatedAt
];
