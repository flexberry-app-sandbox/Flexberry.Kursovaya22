import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гость: DS.belongsTo('i-i-s-kursovaya-гость', { inverse: null, async: false }),
  регистрацВхода: DS.belongsTo('i-i-s-kursovaya-регистрац-входа', { inverse: 'входГостя', async: false })
});

export let ValidationRules = {
  гость: {
    descriptionKey: 'models.i-i-s-kursovaya-вход-гостя.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрацВхода: {
    descriptionKey: 'models.i-i-s-kursovaya-вход-гостя.validations.регистрацВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходГостяE', 'i-i-s-kursovaya-вход-гостя', {
    гость: belongsTo('i-i-s-kursovaya-гость', 'Гость', {
      фИО: attr('Гость', { index: 1, hidden: true }),
      карта: belongsTo('i-i-s-kursovaya-карта', '', {
        кодКарты: attr('Номер карты', { index: 2 }),
        комната: belongsTo('i-i-s-kursovaya-комната', '', {
          номерКомнаты: attr('Комната', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
