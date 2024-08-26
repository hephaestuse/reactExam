import HeaderLogo from "./headerLogo";
import LoginSigninToggler from "./LoginSigninToggler";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="bg-white flex ds1:px-12 ds1:justify-between  justify-around py-4 items-center w-full  shadow-main-light ">
      <HeaderLogo />

      <NavBar />
      <LoginSigninToggler />
    </header>
  );
}

export default Header;
