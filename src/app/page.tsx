"use client";
import DaricommaAppBar from "@/components/appbar/DaricommaAppBar";
import ClickBtn from "@/components/buttons/clickBtn";
import { getStorage, setStorage } from "@/utils/cartLocal/localStorage";
import { getDefaultTheme } from "@/utils/theme/getDefaultTheme";
import toggleTheme from "@/utils/theme/toggleTheme";
import { useEffect, useState } from "react";

export default function Home() {
  /* set default theme as first render */
  useEffect(() => {
    /* https://tailwindcss.com/docs/dark-mode */
    getDefaultTheme();
  }, []);

  /* TODO : navbar MUI */

  return (
    <main className="">
      <DaricommaAppBar />
      <section className="flex min-h-screen justify-center items-center bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text">
        <ClickBtn
          handleClick={() => toggleTheme()}
          viewText={`click me`}
          classNames={`btn bg-blue-200 dark:bg-cyan-500 dark:hover:bg-cyan-300`}
        />
      </section>
    </main>
  );
}
