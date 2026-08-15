import { Teacher } from "@/components/teachers/types/teacherCardTypes";
import { useFetch } from "@/hooks/useFetch";
import { API_ROUTES } from "@/data/dataTeachers";
import { Link } from "react-router";
import TeacherCard from "./TeacherCard";
import { CustomButton } from "@/ui/button";

function TeachersList() {
  const { data, isLoading, error } = useFetch<Teacher[]>(API_ROUTES.teachers)

  if (isLoading) return <div className="absolute top-1/2 left-1/2 text-4xl">Loading...</div>

  if (error) return <div>Error!!!</div>

  return (
    <ul className="teachers-list flex
    flex-col justify-center gap-10">
      {data?.map((teacher) => (
        <li
          key={teacher.id}
          className="teacher-list__item"
        >
          <Link
            to={`/teachers/${teacher.id}`}>
            <TeacherCard cardData={teacher} />
          </Link>
          {
            <div className="flex items-center gap-5">
              <CustomButton
                className="w-full"
                variant="secondary"
              >Edit</CustomButton>
              <CustomButton
                className="w-full"
                variant="danger"
              >Delete</CustomButton>
            </div>
          }
        </li>
      ))}
    </ul>
  );
}

export default TeachersList;