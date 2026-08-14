import Container from "@/components/privitives/container/Container";
import HeadingTitle from "@/components/typography/headingTitle/HeadingTitle";
import { BaseButtonLink } from "@/ui/button";


function AboutAppPage(): React.JSX.Element {
  console.log('----About page render----');

  return (
    <main className="about-app py-10">
      <Container
        className="bg-bg px-4 py-5
        h-full flex flex-col gap-10 items-center
        border border-border rounded-2xl"
      >
        <HeadingTitle
          className="text-center"
          title={`About app "Teachers"`} />
        <BaseButtonLink
          to='/'
        >
          Home
        </BaseButtonLink>
      </Container>
    </main>
  );
}

export default AboutAppPage;