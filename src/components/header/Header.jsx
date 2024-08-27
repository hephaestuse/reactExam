import LoginSigninToggler from "./LoginSigninToggler";
import NavBar from "./NavBar";
import LogoHeader from "./LogoHeader";

function Header() {
  return (
    <header className="bg-white flex ds1:px-12 ds1:justify-between  justify-around py-4 items-center w-full  shadow-main-light ">
      <LogoHeader />

      <NavBar />
      <LoginSigninToggler />
    </header>
  );
}

export default Header;
