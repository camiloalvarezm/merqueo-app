<template>
  <div class="bg-white shadow sticky top-0">
    <div
      class="
        max-w-screen-xl
        mx-auto
        flex
        items-center
        justify-between
        h-20
        px-8
        md:px-16
      "
    >
      <div>
        <img
          src="../assets/img/merqueo-logo.png"
          alt="m-logo"
          class="h-12 lg:h-14 cursor-pointer"
          @click="goToHome"
        />
      </div>
      <div class="flex cursor-pointer" @click="showCartModal">
        <div>
          <i class="fa-solid fa-cart-shopping text-3xl"></i>
        </div>
        <div class="-ml-2 -mt-2">
          <h6 class="font-bold rounded-full bg-darkpink text-white px-2">
            {{ cartQuantity }}
          </h6>
        </div>
        <span class="self-center text-xl font-bold ml-2"
          >Total $ {{ totalPrice }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState({
      cartQuantity: (state) => state.cartQuantity,
      totalPrice: (state) => state.totalPrice,
    }),
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    showCartModal() {
      this.$emit("openModal");
    },
  },
};
</script>

<style>
</style>