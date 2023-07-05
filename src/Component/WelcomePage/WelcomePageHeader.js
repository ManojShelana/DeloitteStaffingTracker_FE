import "../../Styling/WelcomePage/WelcomePageHeader.css";
import DropdownMenu from "./UserIcon";

const WelcomePageHeader = () => {
  return (
    <header className="welcomePageHeaderBanner">
      <h1 className="welcomePageHeaderBanner-header"> Staffing Tool </h1>
      <DropdownMenu />
    </header>
  );
};

export default WelcomePageHeader;
