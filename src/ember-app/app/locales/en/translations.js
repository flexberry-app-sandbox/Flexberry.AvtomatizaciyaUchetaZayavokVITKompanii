import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Avtomatizaciya_ucheta_zayavok_v_ i t_kompanii',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_ucheta_zayavok_v_ i t_kompanii',
          title: 'Avtomatizaciya_ucheta_zayavok_v_ i t_kompanii'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
