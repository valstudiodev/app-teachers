import { useNavigate, useOutletContext, useParams } from "react-router";
import { MainLayoutOutletContext, TeacherFormModalProps, TeacherFormValues } from "../types/teachersTypes";
import { useState, useEffect } from "react";
import TeacherFormField from "./TeacherFormField";
import TeacherButtonAction from "./TeacherButtonAction";

function TeacherForm({
  mode
}: TeacherFormModalProps): React.JSX.Element {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const { teachers, handleAddTeacher, handleEditTeacher } = useOutletContext<MainLayoutOutletContext>();

  const [form, setForm] = useState<TeacherFormValues>({
    name: '',
    subject: '',
    photo: '',
  })

  useEffect(() => {
    if (mode === 'edit' && id) {
      const existingTeacher = teachers.find((teacher) => teacher.id === id)

      if (existingTeacher) {
        setForm({
          name: existingTeacher.name,
          subject: existingTeacher.subject,
          photo: existingTeacher.photo,
        })
      }
    }
  }, [mode, id, teachers]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (mode === 'create') {
      handleAddTeacher(form)
    } else if (mode === 'edit' && id) {
      handleEditTeacher(id, form)
    }
    navigate('/teachers')
  }


  return (
    <form
      action=""
      className="form bg-bg border-border
      rounded-2xl p-5"
      onSubmit={handleSubmit}
    >

      <h2
        className="form__title text-4xl
          font-semibold text-primary-green
          mb-5">
        {mode === 'create' ? 'Add a new teacher' : 'Edit a teacher'}
      </h2>

      <div className="form__fields
      flex flex-col gap-5 mb-5">

        <TeacherFormField
          name="name"
          title="Name:"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <TeacherFormField
          name="subject"
          title="Subject:"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
        />

        <TeacherFormField
          name="photo"
          title="Photo URL:"
          value={form.photo}
          onChange={handleChange}
          placeholder="Photo URL"
        />
      </div>

      <div className="form__actions 
      flex items-center gap-5">
        <TeacherButtonAction
          type="submit"
          className="bg-primary-green
        text-card px-6 py-1 rounded
        cursor-pointer hover:bg-green-800
        transition-all duration-300 w-full"
        >
          {mode === 'create' ? 'Add a teacher' : 'Save changes'}
        </TeacherButtonAction>

        <TeacherButtonAction
          type="button"
          className="bg-primary
        text-card px-6 py-1 rounded
        cursor-pointer hover:bg-gray-600
        transition-all duration-300"
          onClick={() => navigate('/teachers')}
        >
          Cancel
        </TeacherButtonAction>
      </div>
    </form>
  );
}

export default TeacherForm;