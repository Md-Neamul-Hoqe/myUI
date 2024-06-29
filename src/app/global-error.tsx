"use client";
import { useEffect } from "react";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.log("Error Info in global error page: ", error);
  }, [error]);

  const handleReset = () => {
    reset();
  };

  return (
    <div
      className="bg-cover bg-center h-screen w-screen flex justify-center items-center bg-opacity-70s flex-col text-white"
      style={{ backgroundImage: 'url("/notFoundBG.jpg")' }}>
      {/* put background image in public folder */}
      <h2 className="text-4xl font-medium">Something went wrong!</h2>
      <button
        onClick={handleReset}
        className="hover:bg-blue-500 bg-blue-700 text-white py-2 px-4 rounded mt-4">
        Try again
      </button>
    </div>
  );
};

export default GlobalError;
