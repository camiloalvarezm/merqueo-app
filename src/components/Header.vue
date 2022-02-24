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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    cartQuantity: {
      required: true,
      type: Number
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    showCartModal() {
      this.$emit('openModal')
    }
  }
};
</script>

<style>
</style>