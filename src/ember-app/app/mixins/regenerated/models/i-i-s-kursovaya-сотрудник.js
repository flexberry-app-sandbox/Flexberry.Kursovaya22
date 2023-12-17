import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-kursovaya-должности', { inverse: null, async: false }),
  карта: DS.belongsTo('i-i-s-kursovaya-карта', { inverse: null, async: false })
});

export let ValidationRules = {
  телефон: {
    descriptionKey: 'models.i-i-s-kursovaya-сотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kursovaya-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-kursovaya-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карта: {
    descriptionKey: 'models.i-i-s-kursovaya-сотрудник.validations.карта.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-kursovaya-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    должности: belongsTo('i-i-s-kursovaya-должности', 'Должность', {
      должность: attr('Должность', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'должность' }),
    карта: belongsTo('i-i-s-kursovaya-карта', 'Карта', {
      кодКарты: attr('Карта', { index: 5, hidden: true }),
      типКарты: attr('Тип карты', { index: 6 })
    }, { index: 4, displayMemberPath: 'кодКарты' })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-kursovaya-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    должности: belongsTo('i-i-s-kursovaya-должности', 'Должность', {
      должность: attr('Должность', { index: 2 })
    }, { index: -1, hidden: true }),
    карта: belongsTo('i-i-s-kursovaya-карта', 'Карта', {
      кодКарты: attr('Карта', { index: 3 }),
      типКарты: attr('Тип карты', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
