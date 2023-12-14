import { Serializer as КормаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КормаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
