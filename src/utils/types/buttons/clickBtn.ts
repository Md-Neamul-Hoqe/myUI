import { CSSProperties } from "react";

export interface ClickBtnProps {
  /* handler function of the mouse events */
  handleClick?: () => void;
  handleHover?: () => void;
  handleKeyUp?: () => void;
  handleKeyDown?: () => void;

  /* the text to show on the button */
  viewText: string;

  /* classnames like tailwindCSS or customized ![customized classnames must be lies on clickBtn.css file on the same directory]*/
  classNames: string;

  /* custom styles as inline styles */
  styles?: CSSProperties;
}
