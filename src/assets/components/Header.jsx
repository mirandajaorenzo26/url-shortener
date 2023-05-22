import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex justify-between mb-5 py-2">
      <strong className="text-3xl">Shortly</strong>
      <BiMenu size={32} className="fill-gray" />
    </div>
  );
};

export default Header;
