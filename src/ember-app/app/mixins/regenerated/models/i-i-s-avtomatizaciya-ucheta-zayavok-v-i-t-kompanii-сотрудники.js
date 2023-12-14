import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодДолжности: DS.attr('number'),
  табличНомер: DS.attr('number'),
  должность: DS.belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  кодДолжности: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники.validations.кодДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  табличНомер: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники.validations.табличНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники', {
    табличНомер: attr('Таблич номер', { index: 0 }),
    кодДолжности: attr('Код должности', { index: 1 }),
    должность: belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность', 'Должность', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники', {
    табличНомер: attr('Таблич номер', { index: 0 }),
    кодДолжности: attr('Код должности', { index: 1 }),
    должность: belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
