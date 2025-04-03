<template>
  <h1>Breadcrumbs Demo</h1>
          <p>Use the links below to jump around the site and watch the breadcrumbs update...</p>
          <ul>
            <li><NuxtLink to="friends">Friends</NuxtLink></li>
            <li><NuxtLink to="events">Events</NuxtLink></li>
            <li><NuxtLink to="locations">Locations</NuxtLink></li>
            <li><NuxtLink to="friendsTemp">Friends Temporary</NuxtLink></li>
          </ul>
</template>

<script setup>
definePageMeta({
  title: 'Home',
})
</script>