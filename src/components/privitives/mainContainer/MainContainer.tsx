
interface MainContaunerProps {
  children: React.ReactNode;
}

function MainContainer({ children }: MainContaunerProps) {
  return (
    <main className="wrapper">
      {children}
    </main>
  );
}

export default MainContainer;