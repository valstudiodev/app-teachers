import { Teacher } from "@/components/teachers/types/teacherCardTypes";
import { useFetch } from "@/hooks/useFetch";
import { API_ROUTES } from "@/data/dataTeachers";
import { Link } from "react-router";
import TeacherCard from "./TeacherCard";

function TeachersList() {
  const { data, isLoading, error } = useFetch<Teacher[]>(API_ROUTES.teachers)

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error!!!</div>

  return (
    <ul className="teachers-list flex
    flex-col justify-center gap-4">
      {data?.map((teacher) => (
        <li
          key={teacher.id}
          className="teacher-list__item"
        >
          <Link to={`/teachers/${teacher.id}`}>
            <TeacherCard cardData={teacher} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TeachersList;