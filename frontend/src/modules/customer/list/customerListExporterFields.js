import model from 'modules/customer/customerModel';

const { fields } = model;

export default [
  fields.id,
  fields.user,
  fields.subscribed,
  fields.displayName,
  fields.about,
  fields.subscription,
  fields.project,
  fields.lastName,
  fields.subscriptionTest,
  fields.subscriptionExpiration,
  fields.firstName,
  fields.userFirstName,
  fields.userLastName,
  fields.createdAt,
  fields.updatedAt
];
