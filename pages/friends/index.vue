<template>
  <h2>Your Friends</h2>
  <p>Here are your friends...</p>
  <ul>
    <li><NuxtLink to="friends/alice">Alice</NuxtLink></li>
    <li><NuxtLink to="friends/frank">Frank</NuxtLink></li>
    <li><NuxtLink to="friends/jane">Jane</NuxtLink></li>
    <li><NuxtLink to="friends/matt">Matt</NuxtLink></li>
  </ul>
</template>

<script setup>
definePageMeta({
  title: 'Friends'
})
</script>