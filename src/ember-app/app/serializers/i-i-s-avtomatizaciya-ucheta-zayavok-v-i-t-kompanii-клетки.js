import { Serializer as КлеткиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлеткиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
