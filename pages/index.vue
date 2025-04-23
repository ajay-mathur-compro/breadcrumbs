<template>
  <div class="flex flex-col bg-gray-100">
    <h1 class="font-sans text-gray-800 m-5">Breadcrumbs Demo</h1>
    <p class="text-base leading-relaxed text-gray-600 m-5">Use the links below to navigate the site.</p>
  </div>
  <ul class="list-none pl-[10px] ">
    <li class="my-2"><NuxtLink class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 m-4" to="home">Home</NuxtLink></li>
    <li class="my-2"><NuxtLink class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 m-4" to="about">About</NuxtLink></li>
  </ul>
</template>

<script setup>
definePageMeta({
  title: "Home",
});
</script>
