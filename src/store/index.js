import { createStore } from 'vuex'

export default createStore({
  state: {
    invoiceModal: false
  },
  mutations: {
    showModal(state){
      state.invoiceModal = !state.invoiceModal
    }
  },
  actions: {
  },
  modules: {
  }
})
