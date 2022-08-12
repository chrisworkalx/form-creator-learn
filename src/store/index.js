import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locale: 'en'
  },
  getters: {},
  mutations: {
    CHANGE_LANG(state, payload) {
      state.locale = payload;
    }
  },
  actions: {},
  modules: {}
});
