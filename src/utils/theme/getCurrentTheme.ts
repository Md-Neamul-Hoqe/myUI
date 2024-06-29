/* get current user theme */
export const getCurrentTheme = () => {

  return window && window.matchMedia("(prefers-color-scheme: dark)")?.matches;
};
