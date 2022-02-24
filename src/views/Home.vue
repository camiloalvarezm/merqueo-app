<template>
  <div>
    <Header />
    <div class="max-w-screen-xl mx-auto mt-6 px-6 md:px-12">
      <div class="flex flex-col-reverse lg:flex-row md:justify-between md:items-center">
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
            lg:w-1/3
            lg:mb-0
          "
        >
          <i class="fa fa-search mr-2"></i>
          <input type="text" placeholder="Buscar" />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-6 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Header,
    Card,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
