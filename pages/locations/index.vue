<template>
  <h2>Locations</h2>
  <p>Some locations...</p>
  <ul>
    <li><NuxtLink to="locations/mexico">Mexico</NuxtLink></li>
    <li><NuxtLink to="locations/china">China</NuxtLink></li>
  </ul>
</template>

<script setup>
definePageMeta({
  title: 'Locations',
})
</script>