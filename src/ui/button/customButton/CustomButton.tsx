import { ButtonCustomProps } from "./customButtonTypes";
import './customButton.scss';

function CustomButton({
  variant = 'primary',
  children,
  className = '',
  title,
  ...restProps
}: ButtonCustomProps) {
  return (
    <button
      className={`button button--${variant} ${className}`}
      title={title}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;