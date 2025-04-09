<template>
    <div>
        <h1>About</h1>
        <p>This is the about page.</p>
    </div>
    <h3>Navigate to the Entry Page</h3>
    <nuxt-link to="/">Entry Page</nuxt-link>
</template>

<script setup>
definePageMeta({
  title: "About",
});
</script>