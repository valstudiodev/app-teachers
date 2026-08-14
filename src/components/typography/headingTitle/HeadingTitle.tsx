import "./headingTitle.scss";

function HeadingTitle({ title, className }: { title: string, className?: string }): React.JSX.Element {
  return (
    <h1 className={`heading-title text-6xl
    text-primary-green font-semibold ${className}`}>
      {title}
    </h1>
  );
}

export default HeadingTitle;