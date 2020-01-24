import model from 'modules/customer/customerModel';

const { fields } = model;

export default [
  fields.name,
  fields.subscribed,
  fields.subscription,
  fields.project,
  fields.location,
  fields.about,
];
