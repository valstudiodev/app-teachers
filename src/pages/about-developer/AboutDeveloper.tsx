import Container from "@/components/privitives/container/Container";
import HeadingTitle from "@/components/typography/headingTitle/HeadingTitle";
import { BaseButtonLink } from "@/ui/button";


function AboutDeveloper(): React.JSX.Element {
  console.log('-----About Developer page render-----');

  return (
    <main className="about-developer py-10">
      <Container
        className="about-developer__container"
      >
        <div className="bg-bg 
        h-full flex flex-col gap-10 items-center
        border border-border rounded-2xl p-5">
          <HeadingTitle title="About Developer" />
          <BaseButtonLink
            to='/'
          >
            Home
          </BaseButtonLink>
        </div>

      </Container>
    </main>
  );
}

export default AboutDeveloper;