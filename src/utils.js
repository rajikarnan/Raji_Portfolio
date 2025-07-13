// export const getImageUrl = (path) => {
//   return `/assets/${path}`;
//   // If your assets are not showing with npm run preview, you may need to use the import.meta.url or import.meta.env.BASE_URL for correct asset paths in Vite.
// }
export const getImageUrl = (path) => {
  return `${import.meta.env.BASE_URL}assets/${path}`;
};
