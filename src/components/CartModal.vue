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
      "
    >
      <div class="text-right sticky top-0 bg-white">
        <i
          class="fa-solid fa-circle-xmark text-3xl cursor-pointer pt-2"
          @click="close"
        ></i>
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
      <div
        class="
          bg-white
          sticky
          bottom-0
          flex flex-col
          py-3
          gap-3
          md:flex-row md:justify-evenly
          md:py-5
        "
      >
        <button
          class="rounded bg-darkpink py-2 w-full md:w-2/5 font-bold text-white"
        >
          <i class="fa-solid fa-bag-shopping mr-2"></i>Comprar carrito
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
</template>

<script>
import CartItem from "../components/CartItem.vue";
export default {
  name: "CartModal",
  components: {
    CartItem,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>