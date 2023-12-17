import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-гость-l');
  this.route('i-i-s-kursovaya-гость-e',
  { path: 'i-i-s-kursovaya-гость-e/:id' });
  this.route('i-i-s-kursovaya-гость-e.new',
  { path: 'i-i-s-kursovaya-гость-e/new' });
  this.route('i-i-s-kursovaya-должности-l');
  this.route('i-i-s-kursovaya-должности-e',
  { path: 'i-i-s-kursovaya-должности-e/:id' });
  this.route('i-i-s-kursovaya-должности-e.new',
  { path: 'i-i-s-kursovaya-должности-e/new' });
  this.route('i-i-s-kursovaya-карта-l');
  this.route('i-i-s-kursovaya-карта-e',
  { path: 'i-i-s-kursovaya-карта-e/:id' });
  this.route('i-i-s-kursovaya-карта-e.new',
  { path: 'i-i-s-kursovaya-карта-e/new' });
  this.route('i-i-s-kursovaya-комната-l');
  this.route('i-i-s-kursovaya-комната-e',
  { path: 'i-i-s-kursovaya-комната-e/:id' });
  this.route('i-i-s-kursovaya-комната-e.new',
  { path: 'i-i-s-kursovaya-комната-e/new' });
  this.route('i-i-s-kursovaya-регистрац-входа-l');
  this.route('i-i-s-kursovaya-регистрац-входа-e',
  { path: 'i-i-s-kursovaya-регистрац-входа-e/:id' });
  this.route('i-i-s-kursovaya-регистрац-входа-e.new',
  { path: 'i-i-s-kursovaya-регистрац-входа-e/new' });
  this.route('i-i-s-kursovaya-сотрудник-l');
  this.route('i-i-s-kursovaya-сотрудник-e',
  { path: 'i-i-s-kursovaya-сотрудник-e/:id' });
  this.route('i-i-s-kursovaya-сотрудник-e.new',
  { path: 'i-i-s-kursovaya-сотрудник-e/new' });
});

export default Router;
