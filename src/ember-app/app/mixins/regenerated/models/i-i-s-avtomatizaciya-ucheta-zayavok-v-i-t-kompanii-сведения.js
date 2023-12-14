import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  вид: DS.belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид', { inverse: null, async: false }),
  клетки: DS.belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки', { inverse: null, async: false }),
  корма: DS.belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма', { inverse: null, async: false }),
  животные: DS.belongsTo('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные', { inverse: 'сведения', async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  вид: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения.validations.вид.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клетки: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения.validations.клетки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  корма: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения.validations.корма.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  животные: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения.validations.животные.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СведенияE', 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения', {
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
  });
};
