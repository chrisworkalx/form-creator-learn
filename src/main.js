import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
/*****************引入element*****************/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/****************引入vue-i18n*****************/
import VueI18n from 'vue-i18n';
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import en from '@/lang/en';
import zh from '@/lang/zh';
/****************引入vue-form-making**********/
import FormMaking from 'form-making';
import 'form-making/dist/FormMaking.css';

import formCreate from '@form-create/element-ui';
import FcDesigner from '@form-create/designer';
Vue.use(formCreate);
Vue.use(FcDesigner);

Vue.use(VueI18n);

const messages = {
  'en-US': {
    ...en,
    ...enLocale
  },
  'zh-CN': {
    ...zh,
    ...zhLocale
  }
};

const i18n = new VueI18n({
  locale: 'zh-CN', // set locale
  messages // set locale messages
});

/******************register组件****************/
Vue.config.productionTip = false;
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});
Vue.use(FormMaking, {
  lang: i18n.locale,
  i18n,
  aceurl: 'https://form.making.link/public/lib/ace'
});
store.subscribe((actions, state) => {
  console.log(actions, '==actions');
  console.log(state, '==state');
});
new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
