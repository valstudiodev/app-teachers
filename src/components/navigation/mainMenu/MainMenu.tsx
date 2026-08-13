import { routes } from "@/app/routes";
import { NavLink } from "react-router";

interface MainMenuProps {
  parentClassName: string;
}

function MainMenu({ parentClassName }: MainMenuProps): React.JSX.Element {

  const menuRoutes = routes[0].children?.filter(
    route => route.handle?.isInMenu
  ) ?? []

  return (
    <nav className={`${parentClassName}__menu container`}>
      <ul className={`${parentClassName}__list `}>
        {menuRoutes.map((route) => {
          const path = route.index ? '/' : route.path

          return (
            <li
              key={route.id}
              className={`${parentClassName}__item`}
            >
              {
                <NavLink
                  to={`${path}`}
                  className={({ isActive }) =>
                    `${parentClassName}__link ${isActive ? 'is-active' : ''} 
                  `}
                >
                  {route?.handle.title}
                </NavLink>
              }
            </li>
          )
        })}
      </ul >
    </nav >
  );
}

export default MainMenu;