export const useBreadcrumb = () => {
  const breadcrumbStore = BreadcrumbStore();
  const { breadcrumbs } = storeToRefs(breadcrumbStore);

  return {
    breadcrumbs,
    breadcrumbStore,
  };
};
