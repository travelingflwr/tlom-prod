import model from 'modules/mylist/myListModel';

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
