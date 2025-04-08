<template>
  <div class="container">
    <h1>Breadcrumbs Demo</h1>
    <p>Use the links below to navigate the site.</p>
  </div>
  <ul>
    <li><NuxtLink to="home/friends" class="custom-link">Friends</NuxtLink></li>
    <li><NuxtLink to="home/events" class="custom-link">Events</NuxtLink></li>
    <li><NuxtLink to="home/locations" class="custom-link">Locations</NuxtLink></li>
    <li>
      <NuxtLink to="home/friendsTemp" class="custom-link"
        >Friends Temporary</NuxtLink
      >
    </li>
  </ul>
</template>

<script setup>
definePageMeta({
  title: "Home",
});
</script>
