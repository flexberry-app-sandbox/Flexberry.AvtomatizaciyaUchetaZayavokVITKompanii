import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiВидLForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-l';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiДолжностьLForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-l';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiЖивотныеLForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-l';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКлеткиLForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-l';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКормаLForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-l';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiСотрудникиLForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-l';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiВидEForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-e';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiДолжностьEForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-e';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiЖивотныеEForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-e';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКлеткиEForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-e';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКормаEForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-e';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiСотрудникиEForm from './forms/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-e';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiВидModel from './models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiДолжностьModel from './models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiЖивотныеModel from './models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКлеткиModel from './models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКормаModel from './models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiСведенияModel from './models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения';
import IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiСотрудникиModel from './models/i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiВидModel,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiДолжностьModel,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiЖивотныеModel,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКлеткиModel,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКормаModel,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сведения': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiСведенияModel,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiСотрудникиModel
  },

  'application-name': 'Avtomatizaciya_ucheta_zayavok_v_ i t_kompanii',

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
        'application-name': 'Avtomatizaciya_ucheta_zayavok_v_ i t_kompanii',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_ucheta_zayavok_v_ i t_kompanii',
          title: 'Avtomatizaciya_ucheta_zayavok_v_ i t_kompanii'
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
        'avtomatizaciya-ucheta-zayavok-v-i-t-kompanii': {
          caption: 'Avtomatizaciya_ucheta_zayavok_v_IT_kompanii',
          title: 'Avtomatizaciya_ucheta_zayavok_v_IT_kompanii',
          'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-l': {
            caption: 'Животные',
            title: ''
          },
          'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-l': {
            caption: 'Вид',
            title: ''
          },
          'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-l': {
            caption: 'Клетки',
            title: ''
          },
          'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-l': {
            caption: 'Корма',
            title: ''
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
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-l': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiВидLForm,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-l': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiДолжностьLForm,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-l': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiЖивотныеLForm,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-l': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКлеткиLForm,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-l': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКормаLForm,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-l': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiСотрудникиLForm,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-e': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiВидEForm,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-e': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiДолжностьEForm,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-e': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiЖивотныеEForm,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-e': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКлеткиEForm,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-e': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКормаEForm,
    'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-e': IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiСотрудникиEForm
  },

});

export default translations;
