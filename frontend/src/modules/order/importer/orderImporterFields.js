import model from 'modules/order/orderModel';

const { fields } = model;

export default [
  fields.customer,
  fields.subscription,
  fields.employee,
  fields.delivered,
  fields.attachments,
  fields.user,
];
