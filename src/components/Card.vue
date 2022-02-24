<template>
  <div class="rounded w-full bg-white">
    <div class="flex justify-center">
      <img
        src="https://static.merqueo.com/images/products/medium/4bba401e-41dd-4592-8775-ab095c7dd344.jpg"
        alt="img"
        class="rounded"
      />
    </div>
    <div class="flex flex-col m-10 font-bold gap-y-3">
      <span class="text-xl">Nombre producto</span>
      <span class="text-lg">$ 40.000</span>
      <div class="flex justify-evenly mb-2">
        <button class="border border-darkpink rounded-full w-6 h-6 flex items-center justify-center font-bold text-darkpink">-</button>
        <span>1</span>
        <button class="border border-darkpink rounded-full w-6 h-6 flex items-center justify-center font-bold text-darkpink">+</button>
      </div>
      <button class="rounded bg-darkpink py-2 font-bold text-white"><i class="fa-solid fa-bag-shopping mr-2"></i>Comprar</button>
      <button class="rounded bg-lightpink py-2 font-bold text-darkpink"><i class="fa-solid fa-cart-shopping mr-2"></i>Añadir</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>