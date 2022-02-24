<template>
  <div class="rounded-md gap-4 font-bold my-2 py-4 px-5 shadow">
    <div
      class="flex flex-col items-center gap-1 md:flex-row md:justify-between"
    >
      <img :src="itemData.imgUrl" alt="img" class="w-24 h-24 mb-2" />
      <span>{{ itemData.name }}</span>
      <span class="md:w-64"
        >Cantidad:
        <span class="font-normal">{{ itemData.quantity }}</span></span
      >
      <span class="md:w-64"
        >Precio unidad:
        <span class="font-normal">{{ itemData.price }}</span></span
      >
      <span class="md:w-64"
        >Precio total:
        <span class="font-normal">{{
          itemData.price * itemData.quantity
        }}</span></span
      >
      <span
        class="text-darkpink text-md cursor-pointer md:flex md:flex-col"
        @click="removeItem(itemData.id)"
        ><i class="fa-solid fa-trash cursor-pointer mr-2"></i>Eliminar</span
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CartItem",
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["updateCartQuantity", "updateTotalPrice"]),
    removeItem(id) {
      const items = JSON.parse(localStorage.getItem("cartProductList"));
      const newItems = items.filter((value) => {
        return value.id !== id;
      });
      this.updateCartQuantity(newItems.length);
      this.updateTotalPrice(newItems)
      localStorage.setItem("cartProductList", JSON.stringify(newItems));
      this.$emit("reloadCart");
    },
  },
};
</script>

<style>
</style>