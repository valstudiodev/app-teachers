
function HeadingTitle({ title }: { title: string }): React.JSX.Element {
  return (
    <h1 className="heading-title text-6xl
    text-primary-green font-semibold">
      {title}
    </h1>
  );
}

export default HeadingTitle;