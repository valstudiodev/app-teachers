import { MainDashboard } from "@/components";

function HomePage(): React.JSX.Element {
  return (
    <main className="home-page py-10">
      <MainDashboard className="main-dashboard" />
    </main>
  );
}

export default HomePage;