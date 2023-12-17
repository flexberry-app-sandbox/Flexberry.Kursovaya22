import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодКарты: DS.attr('number'),
  типКарты: DS.attr('i-i-s-kursovaya-вид-карты'),
  комната: DS.belongsTo('i-i-s-kursovaya-комната', { inverse: null, async: false })
});

export let ValidationRules = {
  кодКарты: {
    descriptionKey: 'models.i-i-s-kursovaya-карта.validations.кодКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типКарты: {
    descriptionKey: 'models.i-i-s-kursovaya-карта.validations.типКарты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-kursovaya-карта.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартаE', 'i-i-s-kursovaya-карта', {
    кодКарты: attr('Код карты', { index: 0 }),
    типКарты: attr('Тип карты', { index: 1 }),
    комната: belongsTo('i-i-s-kursovaya-комната', 'Комната', {

    }, { index: 2, displayMemberPath: 'номерКомнаты' })
  });

  modelClass.defineProjection('КартаL', 'i-i-s-kursovaya-карта', {
    кодКарты: attr('Код карты', { index: 0 }),
    типКарты: attr('Тип карты', { index: 1 }),
    комната: belongsTo('i-i-s-kursovaya-комната', 'Комната', {
      номерКомнаты: attr('Комната', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
