<template>
  <!-- Breadcrumb navigation bar, displayed only if there are breadcrumbs -->
  <nav aria-label="breadcrumb" v-if="breadcrumbs.length">
    <!-- Loop through the breadcrumbs array to display each breadcrumb -->
    <span v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <!-- Display a separator (>) between breadcrumbs -->

      <!-- Display the last breadcrumb as plain text -->
      <span v-if="index === breadcrumbs.length - 1">{{ breadcrumb.text }}</span>
      <!-- Display other breadcrumbs as links -->
      <NuxtLink v-else :to="breadcrumb.url">{{ breadcrumb.text }}</NuxtLink>

      <span v-if="index < breadcrumbs.length - 1"> &gt; </span>
    </span>
  </nav>
</template>

<script setup lang="ts">
/*
 * Access breadcrumb data reactively from the store.
 */
  const store = BreadcrumbStore();
  const { breadcrumbs } = storeToRefs(store);
</script>
