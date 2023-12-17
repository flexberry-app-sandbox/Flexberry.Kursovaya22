import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovayaГостьLForm from './forms/i-i-s-kursovaya-гость-l';
import IISKursovayaДолжностиLForm from './forms/i-i-s-kursovaya-должности-l';
import IISKursovayaКартаLForm from './forms/i-i-s-kursovaya-карта-l';
import IISKursovayaКомнатаLForm from './forms/i-i-s-kursovaya-комната-l';
import IISKursovayaРегистрацВходаLForm from './forms/i-i-s-kursovaya-регистрац-входа-l';
import IISKursovayaСотрудникLForm from './forms/i-i-s-kursovaya-сотрудник-l';
import IISKursovayaГостьEForm from './forms/i-i-s-kursovaya-гость-e';
import IISKursovayaДолжностиEForm from './forms/i-i-s-kursovaya-должности-e';
import IISKursovayaКартаEForm from './forms/i-i-s-kursovaya-карта-e';
import IISKursovayaКомнатаEForm from './forms/i-i-s-kursovaya-комната-e';
import IISKursovayaРегистрацВходаEForm from './forms/i-i-s-kursovaya-регистрац-входа-e';
import IISKursovayaСотрудникEForm from './forms/i-i-s-kursovaya-сотрудник-e';
import IISKursovayaВходГостяModel from './models/i-i-s-kursovaya-вход-гостя';
import IISKursovayaВходСотрудникаModel from './models/i-i-s-kursovaya-вход-сотрудника';
import IISKursovayaГостьModel from './models/i-i-s-kursovaya-гость';
import IISKursovayaДолжностиModel from './models/i-i-s-kursovaya-должности';
import IISKursovayaКартаModel from './models/i-i-s-kursovaya-карта';
import IISKursovayaКомнатаModel from './models/i-i-s-kursovaya-комната';
import IISKursovayaРегистрацВходаModel from './models/i-i-s-kursovaya-регистрац-входа';
import IISKursovayaСотрудникModel from './models/i-i-s-kursovaya-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-вход-гостя': IISKursovayaВходГостяModel,
    'i-i-s-kursovaya-вход-сотрудника': IISKursovayaВходСотрудникаModel,
    'i-i-s-kursovaya-гость': IISKursovayaГостьModel,
    'i-i-s-kursovaya-должности': IISKursovayaДолжностиModel,
    'i-i-s-kursovaya-карта': IISKursovayaКартаModel,
    'i-i-s-kursovaya-комната': IISKursovayaКомнатаModel,
    'i-i-s-kursovaya-регистрац-входа': IISKursovayaРегистрацВходаModel,
    'i-i-s-kursovaya-сотрудник': IISKursovayaСотрудникModel
  },

  'application-name': 'Kursovaya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya',
          title: 'Kursovaya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        отель: {
          caption: 'Отель',
          title: 'Отель',
          'i-i-s-kursovaya-комната-l': {
            caption: 'Комната',
            title: ''
          },
          'i-i-s-kursovaya-карта-l': {
            caption: 'Карта',
            title: ''
          },
          персонал: {
            caption: 'Персонал',
            title: 'Персонал',
            'i-i-s-kursovaya-должности-l': {
              caption: 'Должности',
              title: 'Должности'
            },
            'i-i-s-kursovaya-сотрудник-l': {
              caption: 'Сотрудники',
              title: 'Сотрудник'
            }
          },
          клиенты: {
            caption: 'Клиенты',
            title: 'Клиенты',
            'i-i-s-kursovaya-гость-l': {
              caption: 'Гости',
              title: 'Гость'
            }
          },
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-kursovaya-регистрац-входа-l': {
              caption: 'Регистрация входа в номер',
              title: 'Регистрац входа'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya-гость-l': IISKursovayaГостьLForm,
    'i-i-s-kursovaya-должности-l': IISKursovayaДолжностиLForm,
    'i-i-s-kursovaya-карта-l': IISKursovayaКартаLForm,
    'i-i-s-kursovaya-комната-l': IISKursovayaКомнатаLForm,
    'i-i-s-kursovaya-регистрац-входа-l': IISKursovayaРегистрацВходаLForm,
    'i-i-s-kursovaya-сотрудник-l': IISKursovayaСотрудникLForm,
    'i-i-s-kursovaya-гость-e': IISKursovayaГостьEForm,
    'i-i-s-kursovaya-должности-e': IISKursovayaДолжностиEForm,
    'i-i-s-kursovaya-карта-e': IISKursovayaКартаEForm,
    'i-i-s-kursovaya-комната-e': IISKursovayaКомнатаEForm,
    'i-i-s-kursovaya-регистрац-входа-e': IISKursovayaРегистрацВходаEForm,
    'i-i-s-kursovaya-сотрудник-e': IISKursovayaСотрудникEForm
  },

});

export default translations;
