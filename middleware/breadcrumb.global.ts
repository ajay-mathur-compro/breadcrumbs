// Global Nuxt route middleware for managing breadcrumbs.

export default defineNuxtRouteMiddleware((to, from) => {
  // Access the breadcrumb store
  const store = BreadcrumbStore();

  if (to.path === from.path) {
    store.resetBreadcrumbs();

    // Split the path into segments and build the breadcrumb trail
    const segments = to.path.split("/").filter(Boolean);
    let accumulatedPath = ""; // Reset accumulatedPath for each navigation.

    segments.forEach((segment) => {
      accumulatedPath += `/${segment}`; // Build the path incrementally.
      const matchedRoute = useRouter().resolve(accumulatedPath);
      const breadcrumbText = matchedRoute?.meta?.title || segment;
      // Add the breadcrumb to the breadcrumb store.
      store.addBreadcrumb({
        text: String(breadcrumbText),
        url: accumulatedPath,
      });
    });
  } else {
    // Retrieve the breadcrumb text from the route's metadata.
    const breadcrumbText = to.meta.title;

    // If the user is navigating to a path other than the root ("/"),
    // add a new breadcrumb to the breadcrumb store.
    if (to.path !== "/") {
      store.addBreadcrumb({
        text: String(breadcrumbText), // Convert the breadcrumb text to a string.
        url: to.path, // Use the current route path as the breadcrumb URL.
      });
    }
    // If the user is navigating to the root path ("/"),
    // reset the breadcrumbs in the breadcrumb store.
    if (to.path === "/") {
      store.resetBreadcrumbs();
    }
  }
});
