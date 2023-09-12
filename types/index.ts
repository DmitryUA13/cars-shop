import { MouseEventHandler } from "react";

export interface HeroButtonProps {
  title: string;
  containerStyles: string;
  btnType?: "submit" | "button";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufactorerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
  car: object;
}
