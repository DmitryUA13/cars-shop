import { MouseEventHandler } from "react";

export interface HeroButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
