"use client";
import { ClickBtnProps } from "@/utils/types/buttons/clickBtn";
import Capitalize from "@/utils/textTransform/CamelCase";
import "./clickBtn.css";

function ClickBtn({
  handleClick,
  viewText,
  styles,
  customBtnClass,
}: ClickBtnProps) {
  return (
    <button onClick={handleClick} className={`${styles} ${customBtnClass}`}>
      {Capitalize(viewText)}
    </button>
  );
}

export default ClickBtn;
