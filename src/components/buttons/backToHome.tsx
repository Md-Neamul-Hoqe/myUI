"use client";
import Link from "next/link";
import "./clickBtn.css";

const BackToHome = () => {
  return (
    <Link href="/" className="btn outline outline-1">
      Go Back To Home
    </Link>
  );
};

export default BackToHome;
