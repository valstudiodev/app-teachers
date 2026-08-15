import { ButtonLinkProps } from "./baseButtonLinkTypes";
import { Link } from "react-router";
import './baseButtonLink.scss'

export default function ButtonLinkBase({
  to,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  className = '',
  ...props
}: ButtonLinkProps): React.JSX.Element {
  return (
    <Link
      {...props}
      to={to}
      className={`button-base-link inline-flex
        items-center ${className}`}
    >
      {LeftIcon && <LeftIcon size={20} />}

      {children}

      {RightIcon && <RightIcon size={20} />}
    </Link>
  )
}