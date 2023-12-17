import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-гость', 'Unit | Model | i-i-s-kursovaya-гость', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
