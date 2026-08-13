import { ButtonHTMLAttributes } from "react";

export interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
}