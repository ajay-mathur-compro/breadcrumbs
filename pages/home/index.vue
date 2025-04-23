<template>
  <div class="flex flex-col bg-gray-100">
    <h1 class="font-sans text-gray-800 m-5">Home Page</h1>
  </div>
  <ul class="list-none pl-[10px]">
    <li class="my-2">
      <NuxtLink
        to="home/friends"
        class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 ml-4" 
        >Friends</NuxtLink
      >
    </li>
    <li class="my-2">
      <NuxtLink
        to="home/events"
        class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 ml-4"
        >Events</NuxtLink
      >
    </li>
    <li class="my-2">
      <NuxtLink
        to="home/locations"
        class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 ml-4"
        >Locations</NuxtLink
      >
    </li>
    <li class="my-2">
      <NuxtLink
        to="home/friendsTemp"
        class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 ml-4"
        >Friends Temporary</NuxtLink
      >
    </li>
  </ul>
  <EntryPage />
</template>

<script setup>
definePageMeta({
  title: "Home",
});
</script>
