import { LucideIcon } from "lucide-react";
import { LinkProps } from "react-router";

export interface ButtonLinkProps extends LinkProps {
  // icon?: LucideIcon;
  children: React.ReactNode;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
}