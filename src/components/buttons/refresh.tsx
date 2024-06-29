"use client";
import { useRouter } from "next/navigation";
import "./clickBtn.css";

const Refresh = () => {
  const router = useRouter();

  const handleRefresh = () => {
    /* re render the requested route */
    router.refresh();
  };

  return (
    <button onClick={handleRefresh} className="btn outline outline-1">
      Refresh
    </button>
  );
};

export default Refresh;
