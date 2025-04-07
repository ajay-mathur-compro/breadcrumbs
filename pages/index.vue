<template>
  <div class="container">
    <h1>Breadcrumbs Demo</h1>
    <p>Use the links below to navigate the site.</p>
  </div>
  <ul>
    <li><NuxtLink to="friends" class="custom-link">Friends</NuxtLink></li>
    <li><NuxtLink to="events" class="custom-link">Events</NuxtLink></li>
    <li><NuxtLink to="locations" class="custom-link">Locations</NuxtLink></li>
    <li>
      <NuxtLink to="friendsTemp" class="custom-link"
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
