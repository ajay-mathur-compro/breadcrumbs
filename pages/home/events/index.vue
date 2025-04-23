<template>
  <h2 class="font-sans text-gray-800 m-5">Upcoming Events</h2>
  <p class="text-base leading-relaxed text-gray-600 m-5">These events are coming up soon...</p>
  <ul class="list-none pl-[10px]">
    <li class="my-2"><NuxtLink to="events/dance" class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 m-4">Dance</NuxtLink></li>
    <li class="my-2"><NuxtLink to="events/cookout" class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 m-4">Cookout</NuxtLink></li>
  </ul>
</template>

<script setup>
definePageMeta({
  title: 'Events',
})
</script>