import { CustomButton } from "@/ui/button";
import { MainLayoutOutletContext, TeacherCardProps } from "@/components/teachers/types";
import "../styles/teacherCard.scss";
import { useOutletContext } from "react-router";

// function TeacherCard({
//   cardData,
//   isSelected = false,
//   onChoose,
//   showChooseButton = true
// }: TeacherCardProps): React.JSX.Element {
//   // const { selectedTeachersById, handleChoose } = useOutletContext<MainLayoutOutletContext>()

//   // const isChoosen = selectedTeachersById.includes(cardData.id)

//   // const onClickChoose = (e: React.MouseEvent<HTMLButtonElement>): void => {
//   //   e.preventDefault()
//   //   e.stopPropagation()

//   //   handleChoose(cardData.id)

//   //   console.log('---Teacher added---');
//   // }

//   return (
//     <article className="teacher-card mb-5">
//       <div className="teacher-card__image--wrap">
//         <img
//           className="teacher-card__img"
//           src={cardData.photo}
//           alt={cardData.name}
//         />
//       </div>
//       <div className="teacher-card__body">
//         <div className="teacher-card__content">
//           <h3 className="teacher-card__title">
//             {cardData.name}
//           </h3>
//           <div className="teacher-card__subject">
//             <strong>Subject:</strong>
//             <span>
//               {cardData.subject}
//             </span>
//           </div>
//         </div>
//         {showChooseButton && onChoose && (
//           <CustomButton
//             variant="primary"
//             onClick={() => onChoose(cardData.id)}
//             className={`teacher-card__choose-btn px-4 py-2 rounded transition-colors ${isSelected
//                 ? 'bg-primary-green text-bg'
//                 : 'bg-bg-border text-text-main'
//               }`}
//           >
//             {isSelected ? 'Selected' : 'Choose'}
//           </CustomButton>
//         )}

//       </div>
//     </article>
//   );
// }

// export default TeacherCard;




export function TeacherCard({
  cardData,
  isSelected = false,
  onChoose,
  showChooseButton = true,
}: TeacherCardProps): React.JSX.Element {
  const handleChooseClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    e.stopPropagation()

    if (onChoose) {
      onChoose(cardData.id)
    }
  }

  return (
    <article className="teacher-card mb-5 w-full">
      <div className="teacher-card__image--wrap">
        <img
          className="teacher-card__img"
          src={cardData.photo}
          alt={cardData.name}
        />
      </div>
      <div className="teacher-card__body">
        <div className="teacher-card__content">
          <h3 className="teacher-card__title">{cardData.name}</h3>
          <div className="teacher-card__subject">
            <strong>Subject:</strong>
            <span>{cardData.subject}</span>
          </div>
        </div>
        {showChooseButton && (
          <CustomButton
            variant={isSelected ? 'secondary' : 'primary'}
            onClick={handleChooseClick}
            className={`teacher-card__choose-btn px-4 py-2 rounded transition-colors ${isSelected
              ? 'bg-primary-green text-bg'
              : 'bg-bg-border text-text-main'
              }`}
          >
            {isSelected ? 'Selected' : 'Choose'}
          </CustomButton>
        )}
      </div>
    </article>
  );
}

export default TeacherCard;