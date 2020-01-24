import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import IntegerField from 'modules/shared/fields/integerField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import StringField from 'modules/shared/fields/stringField';
import DecimalRangeField from 'modules/shared/fields/decimalRangeField';
import DecimalField from 'modules/shared/fields/decimalField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.subscription.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "required": true,
    "min": 2,
    "max": 255
  }),
  description: new StringField('description', label('description'), {
    "max": 2000,
    "required": true
  }),
  unitPrice: new DecimalField('unitPrice', label('unitPrice'), {
    "required": true,
    "scale": 2,
    "min": 0,
    "max": 50
  }),
  photo: new ImagesField('photo', label('photo'), 'subscription/photo',{
    "max": 1,
    "size": 1000000
  }),
  duration: new IntegerField('duration', label('duration'), {
    "required": true
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
  unitPriceRange: new DecimalRangeField(
    'unitPriceRange',
    label('unitPriceRange'),
  ),
  durationRange: new IntegerRangeField(
    'durationRange',
    label('durationRange'),
  ),
};

export default {
  fields,
};
