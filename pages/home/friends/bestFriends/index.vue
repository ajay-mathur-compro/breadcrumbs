
<template>
  <h2 class="font-sans text-gray-800 m-5">These are your Best Friends</h2>
  <ul class="list-none pl-[10px]">
    <li class="my-2"><NuxtLink to="bestFriends/tom" class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 m-4">Tom</NuxtLink></li>
  </ul>
</template>

<script setup>
definePageMeta({
  title: 'Best Friends'
})
</script>
