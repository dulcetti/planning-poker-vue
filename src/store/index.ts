import { createStore } from 'vuex';

export default createStore({
  state: {
    cardValues: [1, 2, 3, 5, 8, 13, 20, 40, 100],
    selected: 1
  },
  mutations: {},
  actions: {
    // selectCard: () => {}
  },
  modules: {},
});
