import model from 'modules/auth/userModel';

const { fields } = model;

export default [
  fields.email,
  fields.firstName,
  fields.lastName,
  // fields.phoneNumber,
  fields.nickName,
  // fields.isSubscribed,
  fields.avatarsIam,
  fields.roles,
];
