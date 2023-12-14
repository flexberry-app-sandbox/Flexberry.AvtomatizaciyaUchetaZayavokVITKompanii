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
          caption: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.caption'),
          title: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.title'),
          children: [{
            link: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-сотрудники-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-животные-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-вид-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-клетки-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-должность-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-ucheta-zayavok-v-i-t-kompanii.i-i-s-avtomatizaciya-ucheta-zayavok-v-i-t-kompanii-корма-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})