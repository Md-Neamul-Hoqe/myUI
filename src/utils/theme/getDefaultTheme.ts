import { getStorage, setStorage } from "../cartLocal/localStorage";

/* get current user theme */
export const getDefaultTheme = () => {
  const HTMLElement = document?.getElementsByTagName("html")[0];
  const userPreference =
    window && window.matchMedia("(prefers-color-scheme: dark)")?.matches
      ? "dark"
      : "light";
  const defaultTheme = HTMLElement?.classList?.[0] || userPreference;

  const selectedTheme = getStorage("theme") as string;

  console.log(selectedTheme, HTMLElement?.classList?.[0]);

  if (selectedTheme) {
    HTMLElement?.classList.add(selectedTheme);
  } else {
    setStorage("theme", defaultTheme);

    HTMLElement?.classList.add(defaultTheme);
  }

  return window && window.matchMedia("(prefers-color-scheme: dark)")?.matches;
};
