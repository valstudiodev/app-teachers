import { BaseButtonLink, CustomButton } from '@/ui/button';
import HeadingTitle from '../typography/headingTitle/HeadingTitle';
import './mainDashboard.scss'

function mainDashboard({ className }: { className: string }): React.JSX.Element {
  return (
    <div className={`${className} container`}>
      <HeadingTitle title={`Welcome to app "Teachers"`} />
      <p className={`${className}__text`}>
        This App will help you to get the information about teachers,
        call them on the meetings and knows the Developer.
      </p>
      <div className={`${className}__actions`}>
        {/* <CustomButton
          title='Look Teachers'
          variant='primary'
          type='button'
        >
          Look Teachers
        </CustomButton> */}

        <BaseButtonLink
          to='/teachers'
        >
          Look Teachers
        </BaseButtonLink>


        <CustomButton
          title='Look Teachers'
          variant='primary'
          type='button'
        >
          Look meeting's list
        </CustomButton>


      </div>
    </div>
  );
}

export default mainDashboard;