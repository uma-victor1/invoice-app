<template>
  <div @click="checkClick" ref="invoiceWrap" class="invoice-wrap flex flx-column">
    <form @submit.prevent="submitForm" class="invoice-content">
      <h1>New Invoice</h1>

      <!--Bill form-->
      <div class="bill-from flex flex-column">
        <h4>Bill from</h4>
        <div class="input flex flex-column">
          <label for="billerStreetAddress">Street Address </label>
          <input required type="text" id="billerStreetAddress" v-model="billerStreetAddress">
        </div>
        <!-- 3 inputs in a row-->
        <div class="location-details flex">

        <div class="input flex flex-column">
          <label for="billerCity">Biller City</label>
          <input required type="text" id="billerCity" v-model="billerCity">
        </div>

        <div class="input flex flex-column">
          <label for="billerZipCode">Biller Zip Code</label>
          <input required type="text" id="billerZipCode" v-model="billerZipCode">
        </div>

        <div class="input flex flex-column">
          <label for="billerCountry">Biller Country</label>
          <input required type="text" id="billerCountry" v-model="billerCountry">
        </div>
        </div>
      </div>
      <!--Bill to-->
      <div class="bill-to flex flex-column"> 
        <h4>Bill to </h4>
        <div class="input flex flex-column">
          <label for="clientName">Client's Name</label>
          <input required type="text" id="clientName" v-model="clientName">
        </div>
        <div class="input flex flex-column">
          <label for="clientEmail">client's Email</label>
          <input required type="text" id="clientEmail" v-model="clientEmail">
        </div>
         <div class="input flex flex-column">
          <label for="clientStreetAddress">Client's Street Address</label>
          <input required type="text" id="clientStreetAddress" v-model="clientStreetAddress">
        </div>

              <div class="location-details flex">

        <div class="input flex flex-column">
          <label for="clientCity">Clients's City</label>
          <input required type="text" id="clientCity" v-model="clientCity">
        </div>

        <div class="input flex flex-column">
          <label for="clientZipCode">Client's Zip Code</label>
          <input required type="text" id="clientZipCode" v-model="clientZipCode">
        </div>

        <div class="input flex flex-column">
          <label for="clientCountry">Client's Country</label>
          <input required type="text" id="clientCountry" v-model="clientCountry">
        </div>
        </div>
      </div>
      <!-- Invoice Work Details -->
      <div class="inoice-work flex flex-column">
        <div class="payment flex">
         <div class="input flex flex-column">
          <label for="invoiceDate">Invoice Date</label>
          <input disabled type="text" id="invoiceDate" v-model="invoiceDate">
         </div>  
          <div class="input flex flex-column">
          <label for="paymentDueDate">Payment DueDate</label>
          <input disabled type="text" id="paymentDueDate" v-model="paymentDueDate">
        </div>  
        </div> 
            <!-- Payment terms  -->
         <div class="input flex flex-column">
          <label for="paymentTerms">Payment Terms</label>
          <select required type="text" id="paymentTerms" v-model="paymentTerms">
            <option value="30">Net 30 Days</option>
            <option value="60">Net 60 Days</option>
          </select>
        </div>
           <div class="input flex flex-column">
          <label for="productDescription">Product Description</label>
          <input required type="text" id="productDescription" v-model="productDescription">
        </div>
        <div class="work-items">
          <h3>Item List</h3>
          <table class="item-list">
            <tr class="table-heading flex"> 
              <th class="item-name">Item Name</th>
              <th class=" qty">qty</th>
              <th class="price">price</th>
              <th class="total">Total</th>
            </tr>
            <tr class="table-items flex" v-for="(item, index) in invoiceItemList" :key="index">
              <td class="item-name"><input type="text" v-model="item.itemName"></td>
              <td class="iqty"><input type="text" v-model="item.qty"></td>
              <td class="price"><input type="text" v-model="item.price"></td>
              <td class="total flex">${{item.total = item.qty * item.price}}</td>
              <img @click="deleteInvoiceItem(item.id)" src="../assets/icon-delete.svg" alt="delete icon">
            </tr>
          </table>
          <div @click="addNewInvoiceItem" class="flex button">
            <img src="../assets/icon-plus.svg" alt="plus icon">
            Add New Item
          </div>
        </div>
      </div> 
      <!-- Save/Exit -->
      <div class="save flex">
        <div class="left">
          <button @click="closeInvoice" class="red">Cancel</button>
        </div>
        <div class="right flex">
          <button @click="savedraft" class="dark-purple">Save Draft</button>
          <button @click="publishInvoice" class="purple">Create Invoice</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name: "InvoiceModal",
    data() {
        return {
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
      docId: null,
      loading: null,
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
        }
    },

}
</script>

<style>

</style>