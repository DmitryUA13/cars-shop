import { MouseEventHandler } from "react";

export interface HeroButtonProps {
  title: string;
  containerStyles: string;
  btnType?: "submit" | "button";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
