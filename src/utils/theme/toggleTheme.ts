import { getStorage, setStorage } from "../cartLocal/localStorage";

export default function toggleTheme() {
  if (window.document) {
    const HTMLElement = document.getElementsByTagName("html")[0];
    const currentTheme = HTMLElement?.classList[0];
    const theTheme = getStorage("theme") as string;

    console.log(currentTheme);

    if (currentTheme === "dark" || theTheme !== currentTheme) {
      console.log("changed to light");
      setStorage("theme", "light");
      // HTMLElement?.setAttribute("data-theme", "light");
      HTMLElement?.classList.remove("dark");
      HTMLElement?.classList.add("light");
    } else {
      setStorage("theme", "dark");
      console.log("changed to dark");
      // HTMLElement?.setAttribute("data-theme", "dark");
      HTMLElement?.classList.add("dark");
      HTMLElement?.classList.remove("light");
    }
  }
}
