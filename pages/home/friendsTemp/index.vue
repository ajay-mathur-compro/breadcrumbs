<template>
  <h2>Temporary Friends</h2>
  <p>Here are your temporary friends...</p>
  <ul>
    <li><NuxtLink to="friendsTemp/alice">Alice</NuxtLink></li>
  </ul>
</template>

<script setup>
definePageMeta({
  title: 'Temporary Friends'
})
</script>