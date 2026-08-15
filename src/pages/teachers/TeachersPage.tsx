import Container from "@/components/privitives/container/Container";
import TeachersList from "@/components/teachers/components/TeacherList";
import HeadingTitle from "@/components/typography/headingTitle/HeadingTitle";
import { CustomButton } from "@/ui/button";
import './teachersPage.scss'


function TeachersPage() {
  console.log('-----Teachers page render-----');

  return (
    <main className="teachers-page py-10 mx-auto">
      <Container className="teachers-page__container">
        <HeadingTitle
          className="mb-5"
          title="List of the Teachers" />
        <div className="teachers-page__actions
        flex items-center gap-4 mb-5 justify-center">
          <CustomButton
            className="w-full"
            variant="primary"
          >
            Add a new teacher
          </CustomButton>
          <CustomButton
            className="w-full"
            variant="secondary"
          >
            Call teachers at the meeting
          </CustomButton>
        </div>
        <TeachersList />
      </Container>
    </main>
  );
}

export default TeachersPage;