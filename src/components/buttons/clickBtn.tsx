"use client";

/* text to capitalize */
import Capitalize from "@/utils/textTransform/Capitalize";

/* types of the props */
import { ClickBtnProps } from "@/utils/types/buttons/clickBtn";

/* all customized css styles */
import "./clickBtn.css";

/**
 * General button component for client side use only
 */
export default function ClickBtn({
  handleClick = () => null,
  handleHover,
  viewText = "BUTTON",
  classNames = "",
  styles,
}: ClickBtnProps) {
  return (
    <button
      onMouseOver={handleHover}
      onClick={handleClick}
      className={classNames}
      style={styles}>
      {Capitalize(viewText)}
    </button>
  );
}
