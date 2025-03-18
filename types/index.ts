import { MouseEventHandler } from "react";

export interface CustomeButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: String;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: String;
  fuel_type: String;
  highway_mpg: number;
  make: String;
  model: String;
  transmission: String;
  year: number;
}
