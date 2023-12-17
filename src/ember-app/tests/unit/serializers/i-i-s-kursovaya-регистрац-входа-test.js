import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-регистрац-входа', 'Unit | Serializer | i-i-s-kursovaya-регистрац-входа', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-регистрац-входа',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-вид-карты',

    'model:i-i-s-kursovaya-вход-гостя',
    'model:i-i-s-kursovaya-вход-сотрудника',
    'model:i-i-s-kursovaya-гость',
    'model:i-i-s-kursovaya-должности',
    'model:i-i-s-kursovaya-карта',
    'model:i-i-s-kursovaya-комната',
    'model:i-i-s-kursovaya-регистрац-входа',
    'model:i-i-s-kursovaya-сотрудник',
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
