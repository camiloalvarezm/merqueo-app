<template>
  <div class="rounded w-full bg-white flex flex-col justify-between pt-10">
    <div class="flex justify-center">
      <img
        :src="productData.image_medium_url"
        alt="img"
        class="rounded h-64 transition delay-150 duration-300 ease-in-out"
      />
    </div>
    <div class="m-10 font-bold divide-y">
      <div class="flex flex-col gap-y-3 mb-3">
        <span class="text-xl">{{ productData.name }}</span>
        <span class="text-lg">$ {{ price }}</span>
        <span class="font-normal text-sm">{{ productData.pum[0] }}</span>
      </div>
      <div class="flex flex-col gap-y-3 pt-3">
        <div class="flex justify-evenly mb-2">
          <button
            class="
              border border-darkpink
              rounded-full
              w-6
              h-6
              flex
              items-center
              justify-center
              font-bold
              text-darkpink
            "
            @click="addOrRemoveQuantity('remove')"
          >
            -
          </button>
          <span>{{ productQuantity }}</span>
          <button
            class="
              border border-darkpink
              rounded-full
              w-6
              h-6
              flex
              items-center
              justify-center
              font-bold
              text-darkpink
            "
            @click="addOrRemoveQuantity('add')"
          >
            +
          </button>
        </div>
        <span class="font-normal text-sm">{{ productData.quantity }} unidades disp.</span>
        <button
          class="rounded bg-darkpink py-2 font-bold text-white"
          @click="showCartOrBuy"
        >
          <i
            :class="{
              'fa-solid fa-bag-shopping': !added,
              'fa-solid fa-cart-shopping': added,
            }"
            class="mr-2"
          ></i
          >{{ added ? "Ver carrito" : "Comprar" }}
        </button>
        <button
          class="rounded bg-lightpink py-2 font-bold text-darkpink"
          @click="addToCart"
          v-if="!added && !existProduct"
        >
          <i class="fa-solid fa-cart-shopping mr-2"></i>Añadir al carrito
        </button>
        <button
          class="rounded bg-darkgreen py-2 font-bold text-white cursor-default"
          v-if="added"
        >
          <i class="fa-solid fa-circle-check mr-2"></i>¡Añadido al carrito!
        </button>
        <button
          class="rounded bg-yellow p-2 font-bold cursor-default text-sm"
          v-if="existProduct"
        >
          <i class="fa-solid fa-triangle-exclamation mr-2"></i>¡El producto ya está en tu carrito!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Card",
  data() {
    return {
      productQuantity: 1,
      added: false,
      existProduct: false,
    };
  },
  props: {
    productData: {
      type: Object,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    price() {
      return this.productData.price * this.productQuantity
    }
  },
  methods: {
    ...mapMutations(["updateCartQuantity", "updateTotalPrice"]),
    addOrRemoveQuantity(action) {
      if (action === "add" && this.productQuantity < this.productData.quantity)
        this.productQuantity++;
      if (action === "remove" && this.productQuantity > 1)
        this.productQuantity--;
    },
    addToCart() {
      const cartList = JSON.parse(localStorage.getItem("cartProductList"));
      if (cartList.find((value) => value.id === this.productId)) {
        this.existProduct = true;
        return;
      }
      if (cartList) {
        cartList.push({
          id: this.productId,
          quantity: this.productQuantity,
          name: this.productData.name,
          imgUrl: this.productData.image_medium_url,
          price: this.productData.price,
        });
        this.updateCartQuantity(cartList.length);
        this.updateTotalPrice(cartList);
        localStorage.setItem("cartProductList", JSON.stringify(cartList));
        this.added = true;
      }
    },
    showCartOrBuy() {
      this.addToCart();
      this.$emit("showCartOrBuy");
    },
  },
};
</script>

<style scoped>
</style>