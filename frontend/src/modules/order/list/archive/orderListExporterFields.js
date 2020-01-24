import model from 'modules/order/orderModel';

const { fields } = model;

export default [
  fields.id,
  fields.customer,
  fields.subscription,
  fields.employee,
  fields.attachments,
  fields.createdAt,
  fields.updatedAt
];
