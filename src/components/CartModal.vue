<template>
  <div
    class="
      absolute
      top-0
      left-0
      bg-darkbackground
      flex
      justify-center
      items-center
      h-full
      w-full
      z-50
      py-28
    "
  >
    <div
      class="
        w-11/12
        max-h-full
        overflow-y-auto
        bg-white
        rounded-xl
        px-4
        pt-0
        md:w-full md:mx-28
        lg:w-1/2
        min-height
        flex flex-col
        justify-between
      "
    >
      <div class="text-right sticky top-0 bg-white border-b-4 pb-3">
        <i
          class="fa-solid fa-circle-xmark text-3xl cursor-pointer pt-2"
          @click="close"
        ></i>
        <h1 class="font-bold text-3xl text-center">Tu carrito</h1>
      </div>
      <div v-if="cartItems.length < 1" class="flex flex-col">
        <i class="fa-solid fa-face-frown text-3xl"></i>
        <span class="font-bold text-lg">No hay productos en el carrito.</span>
      </div>
      <CartItem
        v-for="(product, index) in cartItems"
        :key="index"
        :itemData="product"
        @reload-cart="reloadCart"
      />
      <div class="bg-white sticky bottom-0 py-3 flex flex-col gap-3">
        <div class="border-t-4 pt-3" v-if="cartItems.length > 0">
          <span class="text-3xl font-bold">Total: ${{ totalPrice }}</span>
        </div>
        <div class="flex flex-col md:flex-row md:justify-evenly md:py-5 gap-3">
          <button
            class="rounded py-2 w-full md:w-2/5 font-bold text-white"
            :class="{ 'bg-darkpink': !bought, 'bg-darkgreen': bought }"
            v-if="cartItems.length > 0"
            @click="buy"
          >
            <i class=" mr-2" :class="{'fa-solid fa-bag-shopping': !bought, 'fa-solid fa-face-smile-wink': bought }"></i
            >{{ bought ? "¡Estamos procesando tu compra!" : "Comprar carrito" }}
          </button>
          <button
            class="
              rounded
              bg-lightpink
              py-2
              w-full
              md:w-2/5
              font-bold
              text-darkpink
            "
            @click="close"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";

export default {
  name: "CartModal",
  components: {
    CartItem,
  },
  data() {
    return {
      cartItems: [],
      bought: false,
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let item of this.cartItems) {
        total += item.quantity * item.price;
      }
      return total;
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    reloadCart() {
      this.cartItems = JSON.parse(localStorage.getItem("cartProductList"));
    },
    buy() {
      this.bought = true;
    },
  },
  created() {
    this.reloadCart();
  },
};
</script>

<style scoped>
.min-height {
  min-height: 500px;
}
</style>