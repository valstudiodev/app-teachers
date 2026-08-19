import { Teacher, TeachersListProps } from "@/components/teachers/types";
import { useFetch } from "@/hooks/useFetch";
import { API_ROUTES } from "@/data/dataTeachers";
import TeacherCard from "./TeacherCard";
import { CustomButton } from "@/ui/button";
import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router";
import { MainLayoutOutletContext, TeachersOutletContext } from "@/components/teachers/types/teachersTypes";


function TeachersList(): React.JSX.Element {


  const {
    teachers,
    selectedTeachersById,
    handleDeleteTeacher,
    handleChoose,
    isLoading,
    error
  } = useOutletContext<MainLayoutOutletContext>()

  if (isLoading) return <div className="absolute top-1/2 left-1/2 text-4xl">Loading...</div>

  if (error) return <div className="absolute top-1/2 left-1/2 text-4xl">Error!!!</div>

  return (
    <ul className="teachers-list flex
    flex-col justify-center gap-10">
      {teachers?.map((teacher) => {
        const isSelected = selectedTeachersById.includes(teacher.id)

        return (
          <li
            key={teacher.id}
            className="teacher-list__item"
          >
            <TeacherCard
              cardData={teacher}
              onChoose={handleChoose}
              showChooseButton={true}
              isSelected={isSelected}
            />
            {
              <div className="flex items-center gap-5" >
                <Link
                  to={`${teacher.id}/edit`}
                  className="w-full"
                >
                  <CustomButton
                    className="w-full"
                    variant="secondary"
                  >Edit
                  </CustomButton>
                </Link>

                <CustomButton
                  className="w-full"
                  variant="danger"
                  onClick={() => handleDeleteTeacher(teacher.id)}
                >Delete
                </CustomButton>
              </div>
            }
          </li >
        )
      })}
    </ul >
  );
}

export default TeachersList;