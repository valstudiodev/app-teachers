import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router";
import { useFetch } from "@/hooks/useFetch";
import { useState, useEffect } from "react";
import { API_ROUTES } from "@/data/dataTeachers";
import { MainLayoutOutletContext, Teacher, TeacherFormValues } from "@/components/teachers/types";

function MainLayout(): React.JSX.Element {
  console.log('Main page render');

  const { data, isLoading, error } = useFetch<Teacher[]>(API_ROUTES.teachers);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedTeachersById, setSelectedTeachersById] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setTeachers(data);
    }
  }, [data]);

  const handleChoose = (teacherId: string): void => {
    setSelectedTeachersById((prev) =>
      prev.includes(teacherId)
        ? prev.filter((id) => id !== teacherId)
        : [...prev, teacherId]
    );
  };

  const handleAddTeacher = (values: TeacherFormValues): void => {
    const newTeacher: Teacher = {
      id: crypto.randomUUID(),
      ...values,
    };
    setTeachers((prev) => [...prev, newTeacher]);
  };

  const handleDeleteTeacher = (teacherId: string): void => {
    setTeachers((prev) => prev.filter((teacher) => teacher.id !== teacherId));
    setSelectedTeachersById((prev) => prev.filter((id) => id !== teacherId));
  };

  const handleEditTeacher = (teacherId: string, values: TeacherFormValues): void => {
    setTeachers((prev) =>
      prev.map((teacher) =>
        teacher.id === teacherId ? { ...teacher, ...values } : teacher
      )
    );
  };

  const contextValue: MainLayoutOutletContext = {
    teachers,
    selectedTeachersById,
    isLoading,
    error,
    handleChoose,
    handleAddTeacher,
    handleEditTeacher,
    handleDeleteTeacher,
  };

  return (
    <div className="wrapper">
      <Header className="header" />
      <Outlet context={contextValue} />
      <Footer />
    </div>
  );
}

export default MainLayout;