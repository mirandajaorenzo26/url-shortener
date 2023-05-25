import { BiMenu } from "react-icons/bi";
import Button from "./shared/Button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navRef = useRef();
  const handleNavToggle = () => {
    setToggleNav((toggleNav) => !toggleNav);
  };

  useEffect(() => {
    if (toggleNav) {
      console.log("OPEN");
      navRef.current.classList.remove("-translate-y-[150%]");
    } else {
      navRef.current.classList.add("-translate-y-[150%]");
      console.log("CLOSE");
    }
  }, [toggleNav]);

  return (
    <header className="relative">
      <div className="relative flex justify-between py-5 lg:py-8">
        <div className="flex items-center gap-10">
          <strong className="text-3xl lg:text-4xl">Shortly</strong>
          <Nav className="hidden lg:flex" />
        </div>
        <div className="hidden gap-5 lg:flex">
          <Button text={"Login"} />
          <Button
            text={"Sign Up"}
            className={
              "rounded-full bg-cyan px-6 py-3 text-white hover:bg-light-cyan"
            }
          />
        </div>
        <button className=" lg:hidden" onClick={handleNavToggle}>
          <BiMenu size={32} className="fill-gray " />
        </button>
      </div>
      <div
        ref={navRef}
        className="absolute z-10 w-full -translate-y-[150%] transition-transform duration-500 lg:hidden"
      >
        <MobileNav className="flex w-full flex-col gap-5 rounded-xl bg-dark-violet p-10 text-center text-white " />
      </div>
    </header>
  );
};

export default Header;
