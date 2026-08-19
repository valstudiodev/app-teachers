export interface TeacherFormModalProps {
  mode: 'create' | 'edit';
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  photo: string;
}

export interface TeacherCardProps {
  cardData: Teacher;
  isSelected?: boolean;
  onChoose?: (id: string) => void;
  showChooseButton?: boolean;
}

export interface TeachersResponse {
  teachers: Teacher[]
}

export interface TeachersListProps {
  onChoose: (teacherId: string) => void;
  onEdit: (teacherId: string) => void;
}

export interface TeacherFormValues {
  name: string;
  subject: string;
  photo: string;
}

export interface TeacherFormFieldProps {
  name: keyof TeacherFormValues;
  title: string;
  value: string;
  placeholder: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

export interface TeachersOutletContext {
  teachers: Teacher[];
  handleAddTeacher: (values: TeacherFormValues) => void;
  handleEditTeacher: (
    teacherId: string,
    values: TeacherFormValues,
  ) => void;
  handleDeleteTeacher: (
    teacherId: string
  ) => void
}

export interface MainLayoutOutletContext {
  teachers: Teacher[];
  selectedTeachersById: string[];
  isLoading: boolean;
  error: unknown;
  handleChoose: (teacherId: string) => void;
  handleAddTeacher: (values: TeacherFormValues) => void;
  handleEditTeacher: (teacherId: string, values: TeacherFormValues) => void;
  handleDeleteTeacher: (teacherId: string) => void;
}

