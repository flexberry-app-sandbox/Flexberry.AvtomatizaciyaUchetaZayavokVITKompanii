import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодВида: DS.attr('number'),
  номерЖивотного: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники', { inverse: null, async: false }),
  сведения: DS.hasMany('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения', { inverse: 'животные', async: false })
});

export let ValidationRules = {
  кодВида: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные.validations.кодВида.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  номерЖивотного: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные.validations.номерЖивотного.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сведения: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные.validations.сведения.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖивотныеE', 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные', {
    номерЖивотного: attr('Номер животного', { index: 0 }),
    кодВида: attr('Код вида', { index: 1 }),
    сотрудники: belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники', 'Сотрудники', {
      табличНомер: attr('Таблич номер', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'табличНомер' }),
    сведения: hasMany('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения', 'Сведения', {
      код: attr('Код', { index: 0 }),
      клетки: belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки', 'Клетки', {
        типКлетки: attr('Тип клетки', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'типКлетки' }),
      корма: belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма', 'Корма', {
        типКорма: attr('Тип корма', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'типКорма' }),
      вид: belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид', 'Вид', {
        наименование: attr('Наименование', { index: 6, hidden: true })
      }, { index: 5, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЖивотныеL', 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные', {
    номерЖивотного: attr('Номер животного', { index: 0 }),
    кодВида: attr('Код вида', { index: 1 }),
    сотрудники: belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники', 'Таблич номер', {
      табличНомер: attr('Таблич номер', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
