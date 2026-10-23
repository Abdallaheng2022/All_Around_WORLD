import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <div className="border-b border-solid border-gray-100 shadow">
      <div className="flex justify-between py-5">
        <Logo />
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Header;
