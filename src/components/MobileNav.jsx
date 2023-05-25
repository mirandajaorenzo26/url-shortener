import Button from "./shared/Button";

const MobileNav = ({ className }) => {
  return (
    <nav>
      <ul className={`${className}`}>
        <li className="cursor-pointer hover:text-very-dark-blue">Features</li>
        <li className="cursor-pointer hover:text-very-dark-blue">Pricing</li>
        <li className="cursor-pointer hover:text-very-dark-blue">Resources</li>
        <hr />
        <Button text={"Login"} className={"px-6 py-3"} />
        <Button
          text={"Sign Up"}
          className={
            "rounded-full bg-cyan px-6 py-3 text-white hover:bg-light-cyan"
          }
        />
      </ul>
    </nav>
  );
};

export default MobileNav;
