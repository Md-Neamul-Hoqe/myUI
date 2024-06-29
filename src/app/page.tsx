"use client";
import ClickBtn from "@/components/buttons/clickBtn";
import { getStorage, setStorage } from "@/utils/cartLocal/localStorage";
import toggleTheme from "@/utils/theme/toggleTheme";
import { useEffect, useState } from "react";

export default function Home() {
  /* https://tailwindcss.com/docs/dark-mode */

  /* set default theme as first render */
  useEffect(() => {
    const HTMLElement = document?.getElementsByTagName("html")[0];
    const currentTheme = HTMLElement?.classList[0];
    const theTheme = (getStorage("theme") as string) || "light";

    if (theTheme) {
      if (currentTheme !== theTheme) {
        setStorage("theme", theTheme);

        HTMLElement?.classList.add(theTheme);
      }
    }
  }, []);

  return (
    <main className="flex min-h-screen justify-center items-center bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text">
      <ClickBtn
        handleClick={() => toggleTheme()}
        viewText={`click me`}
        classNames={`btn bg-blue-200 dark:bg-cyan-500 dark:hover:bg-cyan-300`}
      />
    </main>
  );
}
