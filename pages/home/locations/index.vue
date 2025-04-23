<template>
  <h2 class="font-sans text-gray-800 m-5">Locations</h2>
  <p class="text-base leading-relaxed text-gray-600 m-5">Some locations...</p>
  <ul class="list-none pl-[10px]">
    <li class="my-2"><NuxtLink to="locations/mexico" class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 m-4">Mexico</NuxtLink></li>
    <li class="my-2"><NuxtLink to="locations/china" class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 m-4">China</NuxtLink></li>
  </ul>
</template>

<script setup>
definePageMeta({
  title: 'Locations',
})
</script>