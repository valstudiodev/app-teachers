import { BaseButtonLink } from '@/ui/button';
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
        <BaseButtonLink
          to='/teachers'
        >
          Look Teachers
        </BaseButtonLink>

        <BaseButtonLink
          to='/meetings'
        >
          Look meeetings list
        </BaseButtonLink>
      </div>
    </div>
  );
}

export default mainDashboard;