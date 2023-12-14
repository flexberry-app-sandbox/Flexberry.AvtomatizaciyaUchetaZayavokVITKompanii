import { Serializer as ВидSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВидSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
