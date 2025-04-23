<template>
  <!-- Breadcrumb navigation bar, displayed only if there are breadcrumbs -->
  <nav aria-label="breadcrumb" v-if="breadcrumbs.length" class="flex items-center text-sm text-gray-700 font-medium bg-white shadow-sm rounded-md p-4 mb-4">
    <!-- Loop through the breadcrumbs array to display each breadcrumb -->
    <span v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <!-- Display a separator (>) between breadcrumbs -->

      <!-- Display the last breadcrumb as plain text -->
      <span class="ml-3" v-if="index === breadcrumbs.length - 1">{{ breadcrumb.text }}</span>
      <!-- Display other breadcrumbs as links -->
      <NuxtLink class="text-blue-600 hover:text-blue-800 no-underline hover:underline font-medium transition-colors duration-300 ml-3" v-else :to="breadcrumb.url">{{ breadcrumb.text }}</NuxtLink>

      <span class="ml-2" v-if="index < breadcrumbs.length - 1"> &gt; </span>
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
