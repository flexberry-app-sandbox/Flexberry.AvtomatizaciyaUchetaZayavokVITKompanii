import {
  defineNamespace,
  defineProjections,
  Model as КлеткиMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлеткиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
