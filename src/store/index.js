import { createStore } from 'vuex'

export default createStore({
  state: {
    invoiceData: [],
    invoiceModal: false,
    modalActive: null
  },
  mutations: {
    showModal(state){
      state.invoiceModal = !state.invoiceModal
    },
    TOGGLE_MODAL(state) {
      state.modalActive = !state.modalActive
    }
  },
  actions: {
   async GET_INVOICES({commit, state}) {
      const results = await db.collection('invoices').get();
      results.forEach(doc => {
        if(!state.invoiceData.some(invoice > invoice.docId ===doc.id)) {
          
        }
      });
    }
  },
  modules: {
  }
})
