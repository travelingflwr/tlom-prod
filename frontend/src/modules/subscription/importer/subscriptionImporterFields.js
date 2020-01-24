import model from 'modules/subscription/subscriptionModel';

const { fields } = model;

export default [
  fields.name,
  fields.description,
  fields.unitPrice,
  fields.photo,
  fields.duration,
];
