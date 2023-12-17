import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отель.caption'),
          title: i18n.t('forms.application.sitemap.отель.title'),
          children: [{
            link: 'i-i-s-kursovaya-комната-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-kursovaya-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-kursovaya-комната-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-kursovaya-карта-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-kursovaya-карта-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-kursovaya-карта-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.персонал.caption'),
            title: i18n.t('forms.application.sitemap.отель.персонал.title'),
            children: [{
              link: 'i-i-s-kursovaya-должности-l',
              caption: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-kursovaya-должности-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-kursovaya-должности-l.title'),
              icon: 'tags',
              children: null
            }, {
              link: 'i-i-s-kursovaya-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-kursovaya-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.персонал.i-i-s-kursovaya-сотрудник-l.title'),
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.клиенты.caption'),
            title: i18n.t('forms.application.sitemap.отель.клиенты.title'),
            children: [{
              link: 'i-i-s-kursovaya-гость-l',
              caption: i18n.t('forms.application.sitemap.отель.клиенты.i-i-s-kursovaya-гость-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.клиенты.i-i-s-kursovaya-гость-l.title'),
              icon: 'chart line',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.документация.caption'),
            title: i18n.t('forms.application.sitemap.отель.документация.title'),
            children: [{
              link: 'i-i-s-kursovaya-регистрац-входа-l',
              caption: i18n.t('forms.application.sitemap.отель.документация.i-i-s-kursovaya-регистрац-входа-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.документация.i-i-s-kursovaya-регистрац-входа-l.title'),
              icon: 'chart line',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})