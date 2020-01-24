import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import BooleanField from 'modules/shared/fields/booleanField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.hive.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.hive.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "required": true,
    "min": 3,
    "max": 40
  }),
  description: new StringField('description', label('description'), {
    "required": true,
    "min": 3,
    "max": 21000
  }),
  customer: new RelationToOneField('customer', label('customer'), {
    "required": false
  }),
  subscription: new RelationToOneField('subscription', label('subscription'), {
    "required": true
  }),
  user: new RelationToOneField('user', label('user'), {
    "required": true
  }),
  mylom: new RelationToOneField('mylom', label('mylom'), {
    "required": true
  }),
  category: new RelationToOneField('category', label('category'), {}),
  status: new EnumeratorField('status', label('status'), [
    { id: 'active', label: enumeratorLabel('status', 'active') },
    { id: 'pending', label: enumeratorLabel('status', 'pending') },
    { id: 'waiting', label: enumeratorLabel('status', 'waiting') },
    { id: 'cancelled', label: enumeratorLabel('status', 'cancelled') },
    { id: 'complete', label: enumeratorLabel('status', 'complete') },
  ],{
    "required": true
  }),
  state: new BooleanField('state', label('state')),
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
