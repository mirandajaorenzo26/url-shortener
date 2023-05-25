import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex justify-between py-2 lg:py-8">
      <strong className="text-3xl lg:text-4xl">Shortly</strong>
      <BiMenu size={32} className="fill-gray" />
    </div>
  );
};

export default Header;
