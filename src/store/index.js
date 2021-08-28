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
          const data = {
            docId: doc.id,
            invoiceId: doc.data().invoiceId,
            billerStreetAddress: doc.data().billerStreetAddress,
            billerCity: doc.data().billerCity,
            billerZipCode: doc.data().billerZipCode,
            billerCountry: doc.data().billerCountry,
            clientName: doc.data().clientName,
            clientEmail: doc.data().clientEmail,
            clientStreetAddress: doc.data().clientStreetAddress,
            clientCity: doc.data().clientCity,
            clientZipCode: doc.data().clientZipCode,
            clientCountry: doc.data().clientCountry,
            invoiceDateUnix: doc.data().invoiceDateUnix,
            invoiceDate: doc.data().invoiceDate,
            paymentTerms: doc.data().paymentTerms,
            paymentDueDateUnix: doc.data().paymentDueDateUnix,
            paymentDueDate: doc.data().paymentDueDate,
            productDescription: doc.data().productDescription,
            invoiceItemList: doc.data().invoiceItemList,
            invoiceTotal: doc.data().invoiceTotal,
            invoicePending: doc.data().invoicePending,
            invoiceDraft: doc.data().invoiceDraft,
            invoicePaid: doc.data().invoicePaid,
          };
          commit("SET_INVOICE_DATA", data);
        }
      });
    }
  },
  modules: {
  }
})
