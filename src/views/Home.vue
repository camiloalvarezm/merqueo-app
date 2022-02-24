<template>
  <div class="h-screen overflow-y-scroll">
    <Header :cartQuantity="cartQuantity" @open-modal="toggleCartModal" />
    <div class="max-w-screen-xl mx-auto mt-6 px-6 md:px-12">
      <div
        class="
          flex flex-col-reverse
          lg:flex-row
          md:justify-between md:items-center
        "
      >
        <h1 class="text-2xl text-left font-bold">Nuestros productos</h1>
        <div
          class="
            rounded
            bg-white
            flex
            items-center
            px-3
            h-14
            mb-6
            text-lg
            w-full
            lg:w-1/3 lg:mb-0
          "
        >
          <i class="fa fa-search mr-2"></i>
          <input
            type="text"
            placeholder="Buscar"
            class="w-full"
            @keypress="searchProduct($event.target.value)"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-6 gap-4">
        <Card
          v-for="(product, index) in productList"
          :key="index"
          :product-data="product.attributes"
          :product-id="Number(product.id)"
          @update-cart-quantity="updateCartQuantity"
          @show-cart-or-buy="toggleCartModal"
        />
      </div>
    </div>
    <Transition>
      <CartModal @close="toggleCartModal" v-if="showModal" />
    </Transition>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";
import CartModal from "../components/CartModal.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      cartQuantity: 0,
      showModal: false,
    };
  },
  components: {
    Header,
    Card,
    CartModal,
  },
  computed: {
    ...mapState({
      productList: (state) => state.productList,
    }),
    ...mapGetters(["filterProducts"]),
  },
  methods: {
    ...mapActions(["getProductList"]),
    searchProduct() {
      // return this.filterProducts(value)
    },
    updateCartQuantity() {
      this.cartQuantity = JSON.parse(
        localStorage.getItem("cartProductList")
      ).length;
    },
    toggleCartModal() {
      this.showModal = !this.showModal;
    },
  },
  created() {
    this.getProductList();
    this.updateCartQuantity();
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
