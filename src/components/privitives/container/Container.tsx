interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: number | string;
  fluid?: boolean;
}

export default function Container({
  maxWidth = 1280,
  fluid,
  className,
  children,
  ...style
}: ContainerProps): React.JSX.Element {
  return (
    <div
      className={`container ${className}`}
      style={{
        maxWidth: fluid ? '100%'
          : typeof maxWidth === 'number'
            ? `${maxWidth}px`
            : maxWidth,
        ...style
      }}
    >
      {children}
    </div>
  )
}