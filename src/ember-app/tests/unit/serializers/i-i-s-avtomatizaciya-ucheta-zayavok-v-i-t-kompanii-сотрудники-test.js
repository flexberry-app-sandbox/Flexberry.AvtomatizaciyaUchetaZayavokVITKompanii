import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники', 'Unit | Serializer | i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
