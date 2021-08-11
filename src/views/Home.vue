<template>
  <div class="home container">
    <!--Header-->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoice</h1> 
         <span>There are 4 total invoice</span>
       </div>
       <div class="right flex">
         <div @click="toggleFilterMenu" class="filter flex" ref="filter">
           <span>Filter by status</span>
           <img src="../assets/icon-arrow-down.svg" alt="arrow down">
           <ul v-show="filterMenu" class="filter-menu ">
             <li>Draft</li>
             <li>Pending</li>
             <li>Paid</li>
             <li>Clear filter</li>
           </ul>
         </div>
         <div @click="newInvoice" class="button flex">
           <div class="inner-button flex">
             <img src="../assets/icon-plus.svg" alt="plus icon">
           </div>
           <span>New Invoice</span>
         </div>
        </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",data() {
    return {
      filterMenu: true,
    }
  },
  methods: {
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu
    }
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.home {
  color: #fff;  

  .header {
    margin-bottom: 65%;
    width: full;
    
    .left,
    .right {
      flex: 1;
    }
    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;

        span {
         font-size: 12px;
        }
      }

      .filter {
          position: relative;
          margin-right: 40px;
          transition: all 2s ease-in;

          span,
          img {
             pointer-events: none;
          }

          img {
            margin-left: 12px;
            width: 9px;
            height: 5px;
          }
          .filter-menu {
            width: 120px;
            position: absolute;
            top: 25px;
            list-style: none;
            background-color: #1e2139;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);

            li{
              cursor: pointer;
              font-size: 12px;
              padding: 10px 20px;

              &:hover {
                color: #1e2139;
                background-color: #fff;
              }
            }
          }
        }
    }
  }
}
</style>