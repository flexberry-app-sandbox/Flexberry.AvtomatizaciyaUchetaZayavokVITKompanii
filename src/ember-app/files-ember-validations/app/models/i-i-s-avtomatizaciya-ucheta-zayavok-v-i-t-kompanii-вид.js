import {
  defineNamespace,
  defineProjections,
  Model as ВидMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВидMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
