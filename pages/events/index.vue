<template>
  <h2>Upcoming Events</h2>
  <p>These events are coming up soon...</p>
  <ul>
    <li><NuxtLink to="events/dance">Dance</NuxtLink></li>
    <li><NuxtLink to="events/cookout">Cookout</NuxtLink></li>
  </ul>
</template>

<script setup>
definePageMeta({
  title: 'Events',
})
</script>