import {
  defineNamespace,
  defineProjections,
  Model as КормаMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КормаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
