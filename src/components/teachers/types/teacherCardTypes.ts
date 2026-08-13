

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  photo: string;
}

export interface TeacherCardProps {
  cardData: Teacher
}

export interface TeachersResponse {
  teachers: Teacher[]
}