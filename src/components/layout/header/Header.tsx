import MainMenu from "@/components/navigation/mainMenu/MainMenu";
import { } from "./header.scss";

interface HeaderProps {
  className: string;
}

function Header({ className }: HeaderProps) {
  return (
    <header
      className={`${className}`}>

      <MainMenu parentClassName={className} />
    </header >
  );
}

export default Header;