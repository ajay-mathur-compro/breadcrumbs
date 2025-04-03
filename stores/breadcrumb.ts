import { defineStore } from "pinia";

// Define the structure of a breadcrumb object
export interface Breadcrumb {
  text: string; // The display text for the breadcrumb
  url: string; // The URL associated with the breadcrumb
}

// Define a Pinia store for managing breadcrumbs
export const useBreadcrumbStore = defineStore("breadcrumb", {
  // State of the store
  state: () => ({
    breadcrumbs: [] as Breadcrumb[], // Array to hold breadcrumb objects
  }),
  // Actions to manipulate the state
  actions: {
    /**
     * Add a breadcrumb to the store.
     * If a breadcrumb with the same URL already exists, it removes all breadcrumbs after it.
     * @param breadcrumb - The breadcrumb object to add
     */
    addBreadcrumb(breadcrumb: Breadcrumb) {
      // Check if breadcrumb already exists
      const existingIndex = this.breadcrumbs.findIndex(
        (b) => b.url === breadcrumb.url
      );
      if (existingIndex === -1) {
        // Add the breadcrumb if it doesn't exist
        this.breadcrumbs.push(breadcrumb);
      } else {
        // If it exists, remove all breadcrumbs after it
        this.removeBreadcrumb(existingIndex);
      }
    },
    /**
     * Remove breadcrumbs after a specific index.
     * @param index - The index up to which breadcrumbs should be retained
     */
    removeBreadcrumb(index: number) {
      this.breadcrumbs = this.breadcrumbs.slice(0, index + 1);
    },
    /**
     * Reset the breadcrumbs array to an empty state.
     */
    resetBreadcrumbs() {
      this.breadcrumbs = [];
    },
  },
  // Enable persistence for the store
  persist: true,
});
