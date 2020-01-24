import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import BooleanField from 'modules/shared/fields/booleanField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import FilesField from 'modules/shared/fields/filesField';

function label(name) {
  return i18n(`entities.order.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  customer: new RelationToOneField('customer', label('customer'), {
    "required": true
  }),
  subscription: new RelationToOneField('subscription', label('subscription'), {
    "required": true
  }),
  employee: new RelationToOneField('employee', label('employee'), {}),
  delivered: new BooleanField('delivered', label('delivered')),
  attachments: new FilesField('attachments', label('attachments'), 'order/attachments',{
    "size": 1000000,
    "formats": [
      "txt",
      "pdf"
    ],
    "max": 3
  }),
  user: new RelationToOneField('user', label('user'), {
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

};

export default {
  fields,
};
