interface TeacherButtonActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children: React.ReactNode;
}

function TeacherButtonAction({
  title,
  children,
  className = '',
  ...props
}: TeacherButtonActionProps): React.JSX.Element {
  return (
    <button
      className={`button-action ${className}`}
      title={title}
      {...props}
    >
      {children}
    </button>
  );
}

export default TeacherButtonAction;