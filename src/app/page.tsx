"use client";
import ClickBtn from "@/components/buttons/clickBtn";

export default function Home() {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <main className="flex min-h-screen justify-center items-center">
      <ClickBtn
        handleClick={handleClick}
        viewText={`click me`}
        styles="btn bg-cyan-500 "
      />
    </main>
  );
}
