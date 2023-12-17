import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  входСотрудника: DS.hasMany('i-i-s-kursovaya-вход-сотрудника', { inverse: 'регистрацВхода', async: false }),
  входГостя: DS.hasMany('i-i-s-kursovaya-вход-гостя', { inverse: 'регистрацВхода', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-регистрац-входа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  входСотрудника: {
    descriptionKey: 'models.i-i-s-kursovaya-регистрац-входа.validations.входСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  входГостя: {
    descriptionKey: 'models.i-i-s-kursovaya-регистрац-входа.validations.входГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрацВходаE', 'i-i-s-kursovaya-регистрац-входа', {
    дата: attr('Дата', { index: 0 }),
    входГостя: hasMany('i-i-s-kursovaya-вход-гостя', 'Вход гостя', {
      гость: belongsTo('i-i-s-kursovaya-гость', 'Гость', {
        фИО: attr('Гость', { index: 1, hidden: true }),
        карта: belongsTo('i-i-s-kursovaya-карта', '', {
          кодКарты: attr('Номер карты', { index: 2 }),
          комната: belongsTo('i-i-s-kursovaya-комната', '', {
            номерКомнаты: attr('Комната', { index: 3 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    }),
    входСотрудника: hasMany('i-i-s-kursovaya-вход-сотрудника', 'Вход сотрудника', {
      сотрудник: belongsTo('i-i-s-kursovaya-сотрудник', 'Сотрудник', {
        фИО: attr('Сотрудник', { index: 1, hidden: true }),
        должности: belongsTo('i-i-s-kursovaya-должности', '', {
          должность: attr('Должность', { index: 2 })
        }, { index: -1, hidden: true }),
        карта: belongsTo('i-i-s-kursovaya-карта', '', {
          кодКарты: attr('Номер карты', { index: 3 }),
          комната: belongsTo('i-i-s-kursovaya-комната', '', {
            номерКомнаты: attr('Комната', { index: 4 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('РегистрацВходаL', 'i-i-s-kursovaya-регистрац-входа', {
    дата: attr('Дата', { index: 0 })
  });
};
