<template>
  <h2 class="font-sans text-gray-800 m-5">Your Friends</h2>
  <p class="text-base leading-relaxed text-gray-600 m-5">Here are your friends...</p>
  <ul class="list-none pl-[10px]">
    <li class="my-2"><NuxtLink to="friends/alice" class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 ml-4">Alice</NuxtLink></li>
    <li class="my-2"><NuxtLink to="friends/frank" class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 ml-4">Frank</NuxtLink></li>
    <li class="my-2"><NuxtLink to="friends/jane" class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 ml-4">Jane</NuxtLink></li>
    <li class="my-2"><NuxtLink to="friends/matt" class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 ml-4">Matt</NuxtLink></li>
    <h2 class="font-sans text-gray-800 m-4">Your Best Friends</h2>
    <li class="my-2"><NuxtLink to="friends/bestFriends" class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 ml-8">Best Friends</NuxtLink></li>
  </ul>
</template>

<script setup>
definePageMeta({
  title: 'Friends'
})
</script>