import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    routeList: [],
  },
  getters: {
    routeList: (state) => state.routeList,
  },
  mutations: {
    addCatch(state, parms) {
      state.routeList = parms;
    },
  },
  actions: {},
  modules: {},
});
