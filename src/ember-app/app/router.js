import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-l');
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-e',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-e/:id' });
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-e.new',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-e/new' });
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-l');
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-e',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-e/:id' });
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-e.new',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-e/new' });
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-l');
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-e',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-e/:id' });
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-e.new',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-e/new' });
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-l');
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-e',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-e/:id' });
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-e.new',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-e/new' });
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-l');
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-e',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-e/:id' });
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-e.new',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-e/new' });
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-l');
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-e',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-e/:id' });
  this.route('i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-e.new',
  { path: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-e/new' });
});

export default Router;
