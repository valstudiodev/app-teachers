import { TeacherFormFieldProps } from "@/components/teachers/types";

function TeacherFormField({
  name,
  title,
  value,
  placeholder,
  onChange,
}: TeacherFormFieldProps) {
  return (
    <label
      className="form__label
      flex flex-col items-start gap-1">
      {title}
      <input
        type="text"
        className="form__input 
        bg-secondary text-card
          pl-2 py-1 rounded w-full"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default TeacherFormField;