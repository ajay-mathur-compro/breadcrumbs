<template>
  <!-- Breadcrumb navigation bar, displayed only if there are breadcrumbs -->
  <nav aria-label="breadcrumb" v-if="breadcrumbs.length">
    <!-- Link to the home page -->
    <NuxtLink to="/">Home</NuxtLink>
    <!-- Loop through the breadcrumbs array to display each breadcrumb -->
    <span v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <!-- Display a separator (>) between breadcrumbs -->
      <span v-if="index < breadcrumbs.length"> &gt </span>
      <!-- Display the last breadcrumb as plain text -->
      <span v-if="index === breadcrumbs.length - 1">{{ breadcrumb.text }}</span>
      <!-- Display other breadcrumbs as links -->
      <NuxtLink v-else :to="breadcrumb.url">{{ breadcrumb.text }}</NuxtLink>
    </span>
  </nav>
</template>

<script setup lang="ts">
/*
 * Import the breadcrumb store from Pinia and the storeToRefs helper
 * to access reactive properties from the store.
 */
import { useBreadcrumbStore } from "@/stores/breadcrumb";
import { storeToRefs } from "pinia";

/*
 * Initialize the breadcrumb store and extract the breadcrumbs array
 * using storeToRefs for reactivity.
 */
const breadcrumbStore = useBreadcrumbStore();
const { breadcrumbs } = storeToRefs(breadcrumbStore);
</script>
