import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function DateCalc(date: Date | string) {
  const newDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return newDate;
}
