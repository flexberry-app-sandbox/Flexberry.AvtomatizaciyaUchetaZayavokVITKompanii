import {
  defineNamespace,
  defineProjections,
  Model as ДолжностьMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДолжностьMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
