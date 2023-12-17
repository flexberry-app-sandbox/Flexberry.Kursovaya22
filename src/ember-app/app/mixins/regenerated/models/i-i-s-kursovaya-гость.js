import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  данныеПаспорта: DS.attr('number'),
  датаРождения: DS.attr('date'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  карта: DS.belongsTo('i-i-s-kursovaya-карта', { inverse: null, async: false })
});

export let ValidationRules = {
  данныеПаспорта: {
    descriptionKey: 'models.i-i-s-kursovaya-гость.validations.данныеПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаРождения: {
    descriptionKey: 'models.i-i-s-kursovaya-гость.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-kursovaya-гость.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kursovaya-гость.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  карта: {
    descriptionKey: 'models.i-i-s-kursovaya-гость.validations.карта.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостьE', 'i-i-s-kursovaya-гость', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    данныеПаспорта: attr('Данные паспорта', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    карта: belongsTo('i-i-s-kursovaya-карта', 'Карта', {
      кодКарты: attr('Карта', { index: 5, hidden: true }),
      типКарты: attr('Тип карты', { index: 6 })
    }, { index: 4, displayMemberPath: 'кодКарты' })
  });

  modelClass.defineProjection('ГостьL', 'i-i-s-kursovaya-гость', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    данныеПаспорта: attr('Данные паспорта', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    карта: belongsTo('i-i-s-kursovaya-карта', 'Карта', {
      кодКарты: attr('Карта', { index: 4 }),
      типКарты: attr('Тип карты', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
