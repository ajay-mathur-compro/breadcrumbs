<template>
  <div>
    <h1>Breadcrumbs Demo</h1>
    <p>Use the links below to navigate the site.</p>
  </div>
  <ul>
    <li><NuxtLink to="home" class="custom-link">Home</NuxtLink></li>
    <li><NuxtLink to="about" class="custom-link">About</NuxtLink></li>
  </ul>
</template>

<script setup>
definePageMeta({
  title: "Home",
});
</script>
