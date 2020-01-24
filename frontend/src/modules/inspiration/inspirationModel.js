import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.inspiration.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {}),
  description: new StringField('description', label('description'), {}),
  photo: new ImagesField('photo', label('photo'), 'inspiration/photo',{
    "size": 3000000
  }),
  tag: new RelationToManyField('tag', label('tag'), {}),
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
