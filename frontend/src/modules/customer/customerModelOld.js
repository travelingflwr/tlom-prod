import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import BooleanField from 'modules/shared/fields/booleanField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';

function label(name) {
  return i18n(`entities.customer.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "required": true,
    "min": 2,
    "max": 255
  }),
  subscribed: new BooleanField('subscribed', label('subscribed')),
  subscription: new RelationToOneField('subscription', label('subscription'), {}),
  project: new RelationToManyField('project', label('project'), {}),
  location: new StringField('location', label('location'), {
    "required": true
  }),
  about: new StringField('about', label('about'), {
    "required": true,
    "min": 5,
    "max": 2000
  }),
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

};

export default {
  fields,
};
