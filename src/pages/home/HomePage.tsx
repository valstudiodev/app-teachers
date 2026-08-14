import { MainDashboard } from "@/components";
import Container from "@/components/privitives/container/Container";

function HomePage(): React.JSX.Element {
  return (
    <main className="home-page py-10">
      <Container className="home-page__container">
        <MainDashboard className="main-dashboard" />
      </Container>
    </main>
  );
}

export default HomePage;