import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import BooleanField from 'modules/shared/fields/booleanField';
import DateField from 'modules/shared/fields/dateField';
import DateRangeField from 'modules/shared/fields/dateRangeField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';

function label(name) {
  return i18n(`entities.customer.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.customer.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  user: new RelationToOneField('user', label('user'), {
    "required": true
  }),
  subscribed: new BooleanField('subscribed', label('subscribed')),
  displayName: new StringField('displayName', label('displayName'), {}),
  about: new StringField('about', label('about'), {
    "required": true,
    "min": 5,
    "max": 2000
  }),
  subscription: new RelationToOneField('subscription', label('subscription'), {}),
  project: new RelationToManyField('project', label('project'), {}),
  lastName: new StringField('lastName', label('lastName'), {
    "required": true
  }),
  subscriptionTest: new EnumeratorField('subscriptionTest', label('subscriptionTest'), [
    { id: 'lifetime', label: enumeratorLabel('subscriptionTest', 'lifetime') },
    { id: 'annual', label: enumeratorLabel('subscriptionTest', 'annual') },
    { id: 'monthly', label: enumeratorLabel('subscriptionTest', 'monthly') },
    { id: 'demo', label: enumeratorLabel('subscriptionTest', 'demo') },
    { id: 'beta', label: enumeratorLabel('subscriptionTest', 'beta') },
  ],{}),
  subscriptionExpiration: new DateField('subscriptionExpiration', label('subscriptionExpiration'), {}),
  firstName: new StringField('firstName', label('firstName'), {
    "required": true,
    "min": 2,
    "max": 40
  }),
  userFirstName: new RelationToOneField('userFirstName', label('userFirstName'), {}),
  userLastName: new RelationToOneField('userLastName', label('userLastName'), {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  subscriptionExpirationRange: new DateRangeField(
    'subscriptionExpirationRange',
    label('subscriptionExpirationRange'),
  ),
};

export default {
  fields,
};
