import {
  defineNamespace,
  defineProjections,
  Model as ЖивотныеMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЖивотныеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
