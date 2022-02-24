<template>
  <router-view />
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["updateCartQuantity", "updateTotalPrice"]),
  },
  created() {
    if (!localStorage.getItem("cartProductList")) {
      localStorage.setItem("cartProductList", JSON.stringify([]));
    } else {
      const items = JSON.parse(localStorage.getItem("cartProductList"));
      this.updateCartQuantity(items.length);
      let totalPrice = 0;
      for (let item of items) {
        totalPrice += item.quantity * item.price;
      }
      this.updateTotalPrice(totalPrice);
    }
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
