import Container from "@/components/privitives/container/Container";
import TeacherCard from "@/components/teachers/components/TeacherCard";
import { MainLayoutOutletContext } from "@/components/teachers/types";
import HeadingTitle from "@/components/typography/headingTitle/HeadingTitle";
import { BaseButtonLink } from "@/ui/button";
import { useOutletContext } from "react-router";



function MeetingsPage(): React.JSX.Element {
  console.log('-----Meetings page render-----');

  const { teachers, selectedTeachersById } = useOutletContext<MainLayoutOutletContext>()

  const selectedTeachers = teachers.filter(
    (teacher) => selectedTeachersById.includes(teacher.id)
  )

  return (
    <main className="meetings-page py-10">
      <Container className="meetings-page__container">
        <div className="meetings-page__inner 
        bg-bg border-border rounded-2xl p-5">
          <HeadingTitle
            className="text-center mb-10"
            title="Meeting Participants" />

          {selectedTeachers.length === 0 ? (
            <p className="text-4xl
            text-center text-secondary">
              No teachers selected
            </p>
          ) : (
            <ul className="flex flex-col
           ">
              {selectedTeachers.map((teacher) => (
                <li
                  key={teacher.id}
                  className="w-full">
                  <TeacherCard cardData={teacher} showChooseButton={false} />
                </li>
              ))}
            </ul>
          )}

          <BaseButtonLink
            to='/teachers'
          >
            Back to teachers list
          </BaseButtonLink>
        </div>
      </Container>
    </main>
  );
}

export default MeetingsPage;