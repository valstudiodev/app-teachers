import { CustomButton } from "@/ui/button";
import { TeacherCardProps } from "@/components/teachers/types/teacherCardTypes";
import "../styles/teacherCard.scss";

function TeacherCard({ cardData }: TeacherCardProps): React.JSX.Element {
  return (
    <article className="teacher-card mb-5">
      <div className="teacher-card__image--wrap">
        <img
          className="teacher-card__img"
          src={cardData.photo}
          alt="teacher avatar"
        />
      </div>
      <div className="teacher-card__body">
        <div className="teacher-card__content">
          <h2 className="teacher-card__title">
            {cardData.name}
          </h2>
          <div className="teacher-card__subject">
            <strong>Subject:</strong>
            <span>
              {cardData.subject}
            </span>
          </div>
        </div>
        <CustomButton
          className="teacher-card__btn"
          variant="primary">
          Choose
        </CustomButton>
      </div>
    </article>
  );
}

export default TeacherCard;