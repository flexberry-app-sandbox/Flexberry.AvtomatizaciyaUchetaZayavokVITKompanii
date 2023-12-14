import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность', 'Unit | Model | i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид',
    'model:i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность',
    'model:i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные',
    'model:i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки',
    'model:i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма',
    'model:i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения',
    'model:i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
