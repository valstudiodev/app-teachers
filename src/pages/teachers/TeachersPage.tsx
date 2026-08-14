import Container from "@/components/privitives/container/Container";
import TeachersList from "@/components/teachers/components/TeacherList";
import HeadingTitle from "@/components/typography/headingTitle/HeadingTitle";
import { CustomButton } from "@/ui/button";


function TeachersPage() {
  return (
    <main className="teachers-page py-10 mx-auto">
      <Container className="teachers-page__container">
        <HeadingTitle title="List of the Teachers" />
        <div className="teachers-page__actions
        flex items-center gap-4">
          <CustomButton
            variant="primary"
          >
            Edit
          </CustomButton>
          <CustomButton
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