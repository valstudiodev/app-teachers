import Container from "@/components/privitives/container/Container";
import HeadingTitle from "@/components/typography/headingTitle/HeadingTitle";
import { CustomButton } from "@/ui/button";
import './teachersPage.scss'
import { MainLayoutOutletContext } from "@/components/teachers/types/teachersTypes";
import { Link, Outlet, useNavigate, useOutletContext } from "react-router";


function TeachersPage() {
  console.log('-----Teachers page render-----');

  const context = useOutletContext<MainLayoutOutletContext>()
  const navigate = useNavigate()


  return (
    <main className="teachers-page py-10 mx-auto">
      <Container className="teachers-page__container">
        <HeadingTitle
          className="mb-5"
          title="List of the Teachers" />

        <div className="teachers-page__actions
                flex items-center gap-4 mb-5 justify-center">
          <Link
            to='new'
            className="w-full">
            <CustomButton
              className="w-full"
              variant="primary"
            >
              Add a new teacher
            </CustomButton>
          </Link>

          <CustomButton
            className="w-full"
            variant="secondary"
            disabled={context.selectedTeachersById.length === 0}
            onClick={() => navigate('/meetings')}
          >
            Call ({context.selectedTeachersById.length}) at the meeting
          </CustomButton>
        </div>

        <Outlet context={context} />

      </Container>
    </main>
  );
}

export default TeachersPage;